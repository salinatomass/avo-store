import { useRouter } from 'next/router'
import { useAppContext } from 'context/AppContext'
import { ProductSummary } from '@components/Product'

const ProductItem = () => {
  const router = useRouter()
  const { products } = useAppContext()

  const productId = router.query.productId
  const product = products.find(prod => prod?.id === productId)

  return <div>{product && <ProductSummary product={product} />}</div>
}

export default ProductItem
