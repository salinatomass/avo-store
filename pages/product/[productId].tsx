import { useRouter } from "next/router";

const ProductItem = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Esta es la página del producto: {router.query.productId}</h1>
    </div>
  );
};

export default ProductItem;
