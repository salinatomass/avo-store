import Image from 'next/image'
import Link from 'next/link'

interface Props {
  product: TProduct
}

const ProductCard = ({ product }: Props) => {
  const { id, name, image, price } = product

  return (
    <article>
      <Link href={`/product/${id}`}>
        <Image src={image} alt={name} width={333} height={333} />
        <div className="description">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
      </Link>

      <style jsx>{`
        article {
          box-shadow: 8px 10px 34px 20px rgba(255, 255, 255, 0.1);
          background-color: var(--secondary-color);
        }
        .description {
          padding: 18px 12px;
        }
      `}</style>
    </article>
  )
}

export default ProductCard
