import Header from '@components/Header/Header'
import { ProductList } from '@components/Product'
import { useAppContext } from 'context/AppContext'

export default function HomePage() {
  const { products } = useAppContext()

  return (
    <div className="wrapper">
      <Header />
      <ProductList products={products} />
    </div>
  )
}
