import Header from '@components/Header/Header'
import { ProductList } from '@components/Product'
import { useAppContext } from 'context/AppContext'

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

interface Props {
  productList: TProduct[]
}

export default function HomePage({ productList }: Props) {
  return (
    <div className="wrapper">
      <Header />
      <ProductList products={productList} />
    </div>
  )
}
