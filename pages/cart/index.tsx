import Link from 'next/link'
import { useAppContext } from 'context/AppContext'
import { CartEmpty, CartSummary } from '@components/Cart'

const CartPage = () => {
  const { getCartSubTotal, getCartItemsCount } = useAppContext()

  return (
    <main className="cart">
      {getCartItemsCount() === 0 ? <CartEmpty /> : <CartSummary />}

      <hr />

      <section className="checkout">
        <h4>Total price: ${Math.round(getCartSubTotal())}</h4>
        <Link href="#" className="btn btn-secondary">
          Checkout
        </Link>
      </section>

      <style jsx>{`
        hr {
          margin-top: 40px;
          margin-bottom: 40px;
          border-color: var(--light-color);
        }
        .checkout {
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid var(--light-color);
          border-radius: 4px;
        }
      `}</style>
    </main>
  )
}

export default CartPage
