// detailpage index.js
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsPageComponent = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  console.log("params", id);

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:4000/products/${id}`);
    console.log("res", response.data);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
    console.log("in the useEffect");
  }, []);

  console.log("This is the product: ", product);

  return (
    <div>
      {!product ? (
        "Loading"
      ) : (
        <div>
          <div>
            <h1>{product.title}</h1>
          </div>
          <div>
            <h2>{product.description}</h2>
          </div>
          <div>
            <h3>{product.rating}</h3>
          </div>
          <img src={product.mainImage} alt="productImage" />
        </div>
      )}
    </div>
  );
};

export { DetailsPageComponent };
