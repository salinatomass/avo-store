import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from 'react'
import { useQuery } from 'react-query'
import toast from 'react-hot-toast'

import { appReducer, initialState, TAppActionKind } from './appReducer'

const AppContext = createContext(initialState)

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const getProducts = async () => {
    const res = await fetch('/api/avo')
    return await res.json()
  }

  const { data } = useQuery('products', getProducts)

  const loadProducts = useCallback(() => {
    if (data)
      dispatch({ type: TAppActionKind.LOAD_PRODUCTS, payload: data.data })
  }, [data])

  const addToCart = (product: TCartProduct) => {
    dispatch({ type: TAppActionKind.ADD_TO_CART, payload: product })
    toast.success('Product added to your cart')
  }

  const removeFromCart = (product: TCartProduct) =>
    dispatch({ type: TAppActionKind.REMOVE_FROM_CART, payload: product })

  const getCartItemsCount = () =>
    state.cart.reduce((accum, current) => accum + current.quantity, 0)

  const getCartSubTotal = () =>
    state.cart.reduce(
      (accum, current) => accum + current.price * current.quantity,
      0
    )

  useEffect(() => {
    loadProducts()
  }, [loadProducts])

  return (
    <AppContext.Provider
      value={{
        ...state,
        loadProducts,
        addToCart,
        removeFromCart,
        getCartItemsCount,
        getCartSubTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
