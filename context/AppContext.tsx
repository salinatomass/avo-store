import { createContext, useContext, useReducer } from 'react'

import { appReducer, initialState } from './appReducer'

const AppContext = createContext(initialState)

export const useAppContext = () => {
  const context = useContext(AppContext)
  return context
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const products = []

  const loadProducts = () =>
    dispatch({ type: TAppActionKind.LOAD_PRODUCTS, payload: products })

  const addToCart = (product: TProduct) => {
    dispatch({ type: TAppActionKind.ADD_TO_CART, payload: product })
  }

  const removeFromCart = (product: TProduct) => {
    dispatch({ type: TAppActionKind.REMOVE_FROM_CART, payload: product })
  }

  return (
    <AppContext.Provider
      value={{ ...state, loadProducts, addToCart, removeFromCart }}
    >
      {children}
    </AppContext.Provider>
  )
}
