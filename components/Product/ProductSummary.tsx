import Image from 'next/image'
import ProductAttributes from './ProductAttributes'
import AddToCart from './AddToCart'

interface Props {
  product: TProduct
}

const ProductSummary = ({ product }: Props) => {
  return (
    <main className="wrapper">
      <div className="summary">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          priority
        />
        <div className="description">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <p className="sku">SKU: {product.sku}</p>
          <AddToCart product={product} />
        </div>
      </div>

      <ProductAttributes attributes={product.attributes} />

      <style jsx>{`
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
