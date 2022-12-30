import Header from '@components/Header/Header'
import { ProductList } from '@components/Product'

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/avo`)
  const { data: products }: TAPIAvoResponse = await response.json()

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
