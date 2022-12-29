import { GetStaticProps } from 'next'
import { ProductSummary } from '@components/Product'
import { getAllProducts, getProductById } from 'api/avoApi'

export const getStaticPaths = async () => {
  const productList = await getAllProducts()
  const paths = productList.map(avo => ({ params: { productId: avo.id } }))

  return {
    paths,
    fallback: false, // incremental static generation: 404 for everything else
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.productId as string
  const product = await getProductById(id)

  return {
    props: {
      product,
    },
  }
}

const ProductItem = ({ product }: { product: TProduct }) => {
  return <div>{product && <ProductSummary product={product} />}</div>
}

export default ProductItem
