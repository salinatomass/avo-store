interface TCartProduct extends TProduct {
  quantity: number
}

type TAppState = {
  cart: TCart[]
  products: TProduct[] | []
  loadProducts: () => void
  addToCart: (product: TCartProduct) => void
  removeFromCart: (product: TCartProduct) => void
}

type TAppAction = {
  type: TAppActionKind
  payload?: any
}
