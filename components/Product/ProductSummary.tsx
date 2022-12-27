import { useRef } from 'react'
import Image from 'next/image'
import ProductAttributes from './ProductAttributes'

interface Props {
  product: TProduct
}

const ProductSummary = ({ product }: Props) => {
  const form = useRef(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(form.current)
    console.log(formData.get('quantity'))
  }

  return (
    <main className="wrapper">
      <div className="summary">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
        />
        <div className="description">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p className="sku">SKU: {product.sku}</p>
          <form ref={form} onSubmit={handleSubmit}>
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              min={1}
              max={100}
              step={1}
              required
            />
            <button type="submit" className="btn btn-primary">
              Add to cart
            </button>
          </form>
        </div>
      </div>

      <ProductAttributes attributes={product.attributes} />

      <style jsx>{`
        .wrapper {
          padding: 0 20px;
        }
        .summary {
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 20px;
        }
        .description {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 300px;
          margin: 0 auto;
        }
        h2 {
          font-size: 34px;
        }
        p {
          font-size: 16px;
        }
        .sku {
          width: fit-content;
          padding: 4px 8px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        form {
          display: flex;
          margin-top: 20px;
        }
        input {
          width: 180px;
          height: contain;
          outline: none;
          padding: 8px 16px;
        }
        button {
          border-radius: 0;
          padding: 14px 18px;
        }
        @media screen and (min-width: 600px) {
          .summary {
            flex-direction: row;
            justify-content: space-between;
          }
          .description {
            max-width: 100%;
            margin: 0;
          }
        }
      `}</style>
    </main>
  )
}

export default ProductSummary
