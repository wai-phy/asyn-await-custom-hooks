import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("No products Found, Come back soon");
      }
      const products = await response.json();

      setProducts(products);
    } catch (error) {
      setError(error.message)
    }
    setLoading(false);

  };
  return (
    <>
      <h1 className="shop-title">Shopping Website in Myanmar</h1>
      <section className="grid-ctr">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      {isLoading && <h1>Loading Products</h1>}
      {isError && <h1>{isError}</h1>}
    </>
  );
}

export default App;
