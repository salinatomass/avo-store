import { useAppContext } from 'context/AppContext'

const CartPage = () => {
  const { cart } = useAppContext()

  return (
    <main className="cart">
      {cart.length === 0 ? 'Your cart is empty' : 'cart'}
    </main>
  )
}

export default CartPage
