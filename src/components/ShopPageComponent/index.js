import { useState, useEffect } from "react";
import axios from "axios";

import { ProductCardComponent } from "../ProductCardComponent";

const ShopPageComponent = () => {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const response = await axios.get("http://localhost:4000/products");
    console.log("response", response.data.getAllProducts);
    setProducts(response.data.getAllProducts);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {/* <p>Here comes the Products!</p> */}
      {!products
        ? "Loading ..."
        : products.map((products, id) => {
            return <ProductCardComponent key={id} products={products} />;
          })}
    </div>
  );
};

export { ShopPageComponent };
