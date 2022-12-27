interface TCart extends TProduct {
  quantity: number
}

type TAppState = {
  cart: TCart[]
  products: TProduct[] | []
  loadProducts: () => void
  addToCart: (product: TProduct) => void
  removeFromCart: (product: TProduct) => void
}

enum TAppActionKind {
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',

  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type TAppAction = {
  type: TAppActionKind
  payload?: any
}
