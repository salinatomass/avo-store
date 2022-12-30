interface TCartProduct extends TProduct {
  quantity: number
}

type TAppState = {
  cart: TCartProduct[]
  addToCart: (product: TCartProduct) => void
  removeFromCart: (product: TCartProduct) => void
  getCartItemsCount: () => number
  getCartSubTotal: () => number
}

type TAppAction = {
  type: TAppActionKind
  payload?: any
}
