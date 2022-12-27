import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProductSummary } from '@components/Product'

const ProductItem = () => {
  const router = useRouter()

  const productId = router.query.productId
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then(res => res.json())
        .then(product => {
          console.log(product)
          setProduct(product)
        })
        .catch(err => console.error(err))
    }
  }, [productId])

  return (
    <div>{product === null ? null : <ProductSummary product={product} />}</div>
  )
}

export default ProductItem
