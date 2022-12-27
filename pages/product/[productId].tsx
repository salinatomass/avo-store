import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProductSummary } from '@components/Product'

const defaultProduct = {
  id: '',
  name: '',
  image: '',
  price: 0,
  sku: '',
  attributes: {
    description: '',
    hardiness: '',
    shape: '',
    taste: '',
  },
}

const ProductItem = () => {
  const router = useRouter()

  const productId = router.query.productId
  const [product, setProduct] = useState<TProduct>(defaultProduct)

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then(res => res.json())
        .then(product => setProduct(product))
        .catch(err => console.error(err))
    }
  }, [productId])

  return (
    <div>
      <ProductSummary product={product} />
    </div>
  )
}

export default ProductItem
