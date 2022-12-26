import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function HomePage() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data }) => setProductList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Platzi Avo</h1>
      {productList.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </div>
  );
}
