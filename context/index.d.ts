interface TCartProduct extends TProduct {
  quantity: number
}

type TAppState = {
  cart: TCart[]
  products: TProduct[] | []
  loadProducts: () => void
  addToCart: (product: TProduct) => void
  removeFromCart: (product: TProduct) => void
}

type TAppAction = {
  type: TAppActionKind
  payload?: any
}
