export enum TAppActionKind {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export const initialState: TAppState = {
  cart: [],
  products: [],
  loadProducts: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
}

export const appReducer = (state: TAppState, action: TAppAction): TAppState => {
  const { type, payload } = action

  switch (type) {
    case TAppActionKind.LOAD_PRODUCTS:
      return {
        ...state,
        products: payload,
      }
    case TAppActionKind.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      }
    case TAppActionKind.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== payload.id),
      }
  }
}
