import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const defaultProduct = {
  id: "",
  name: "",
  image: "",
  price: 0,
  sku: "",
  attributes: {
    description: "",
    hardiness: "",
    shape: "",
    taste: "",
  },
};

const ProductItem = () => {
  const router = useRouter();

  const productId = router.query.productId;
  const [product, setProduct] = useState<TProduct>(defaultProduct);

  useEffect(() => {
    fetch(`/api/avo/${productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <div>
      <h1>Esta es la página del producto: {product && product.name}</h1>
    </div>
  );
};

export default ProductItem;
