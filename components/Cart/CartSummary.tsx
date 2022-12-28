import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from 'context/AppContext'

import { AiOutlineClose as CloseIcon } from 'react-icons/ai'

const CartSummary = () => {
  const { cart, removeFromCart } = useAppContext()

  return (
    <section className="wrapper">
      {cart.map(prod => (
        <article key={prod.id} className="product">
          <figure>
            <Image src={prod.image} alt={prod.name} width={150} height={150} />
          </figure>
          <div className="description">
            <Link
              href={`/product/${prod.id}`}
              className="btn btn-link"
              style={{ fontSize: '35px' }}
            >
              {prod.name}
            </Link>
            <p className="count">
              {prod.quantity} x {prod.price}
            </p>
            <p>Some more information goes here...</p>
          </div>
          <button className="btn delete" onClick={() => removeFromCart(prod)}>
            <CloseIcon />
          </button>
        </article>
      ))}

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .product {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
          justify-items: center;
          text-align: center;
        }
        .description {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 16px;
        }
        .count {
          color: var(--light-color);
          font-size: 18px;
        }
        .delete {
          font-size: 20px;
          color: var(--white-color);
          display: flex;
          padding: 0;
          align-self: flex-end;
          border: 2px solid var(--white-color);
          border-radius: 4px;
          padding: 6px;
        }

        @media screen and (min-width: 600px) {
          .product {
            grid-template-columns: max-content 1fr max-content;
            justify-items: flex-start;
            text-align: left;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  )
}
export default CartSummary
