import { GetStaticProps } from 'next'
import { ProductSummary } from '@components/Product'

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/avo`)
  const { data: products }: TAPIAvoResponse = await response.json()

  const paths = products.map(avo => ({ params: { productId: avo.id } }))

  return {
    paths,
    fallback: false, // incremental static generation: 404 for everything else
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const id = context.params?.productId as string

  const response = await fetch(`${process.env.API_HOST}/api/avo/${id}`)
  const product: TProduct = await response.json()

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
