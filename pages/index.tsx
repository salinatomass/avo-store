import { useEffect, useState } from 'react'
import Header from '@components/Header/Header'

export default function HomePage() {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <Header />
      {productList.map(product => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  )
}
