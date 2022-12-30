import { createContext, useContext, useReducer } from 'react'
import toast from 'react-hot-toast'

import { appReducer, initialState, TAppActionKind } from './appReducer'

const AppContext = createContext(initialState)

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

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

  return (
    <AppContext.Provider
      value={{
        ...state,
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
