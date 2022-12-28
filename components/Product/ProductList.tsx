import ProductCard from './ProductCard'

interface Props {
  products: TProduct[]
}

const ProductList = ({ products }: Props) => {
  return (
    <div className="list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

      <style jsx>{`
        .list {
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          gap: 40px;

          margin-top: 60px;
          margin-bottom: 40px;
        }
        @media screen and (min-width: 600px) {
          .list {
            grid-template-columns: 1fr 1fr;
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductList
