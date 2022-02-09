// detailpage index.js
import "./styles.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { DetailsCard } from "../DetailsCard";

const DetailsPageComponent = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  // console.log("params", id);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:4000/products/${id}`);
      console.log("response", response.data.findProductById);
      setProduct(response.data.findProductById);
    };

    fetchProduct();
    // console.log("in the useEffect");
  }, [id]);

  return (
    <div>
      {!product ? (
        "Loading"
      ) : (
        <div>
          <DetailsCard key={id} product={product} />
        </div>
      )}
    </div>
  );
};

export { DetailsPageComponent };
