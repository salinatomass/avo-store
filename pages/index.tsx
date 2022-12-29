import Header from '@components/Header/Header'
import { ProductList } from '@components/Product'
import { getAllProducts } from 'api/avoApi'

export const getStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
  }
}

interface Props {
  products: TProduct[]
}

export default function HomePage({ products }: Props) {
  return (
    <div className="wrapper">
      <Header />
      <ProductList products={products} />
    </div>
  )
}
