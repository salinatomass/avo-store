import { useEffect, useState } from 'react'
import Header from '@components/Header/Header'
import { ProductList } from '@components/Product'

export default function HomePage() {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <ProductList products={productList} />
    </div>
  )
}
