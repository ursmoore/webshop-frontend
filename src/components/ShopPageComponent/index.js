import { useState, useEffect } from "react";
import axios from "axios";

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
      <p>Here comes the Products!</p>
      {!products
        ? "Loading ..."
        : products.map((prod, id) => {
            return (
              <div key={prod.id}>
                <h3>{prod.title}</h3>
                <p>price: ${prod.price}</p>
                <p>Rating: {prod.rating}</p>
                <img
                  style={{ width: 200 }}
                  src={prod.mainImage}
                  alt={prod.title}
                />
              </div>
            );
          })}
    </div>
  );
};

export { ShopPageComponent };
