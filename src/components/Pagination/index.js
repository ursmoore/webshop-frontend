// import { useState, useEffect } from "react";
// import axios from "axios";

// import { ProductCardComponent } from "../ProductCardComponent";

// const Pagination = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const [currentPage, setCurrentpage] = useState(1)
//     const [productsPerPage, setProductsPerPage] = useState(10)

//     useEffect(() => {
//         const fetchProducts = async () => {
//             setLoading(true)
//             const response = await axios.get("http://localhost:4000/products");
//             setProducts(response.data.getAllProducts);
//             setLoading(false)
//         }

//         fetchProducts()
//     },[])

//     const indexOfLastProduct = currentPage * postsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - postsPerPage;
//     const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

//     return (
//         <div>
//             <ProductCardComponent products={currentProducts} loading={loading} />
//         </div>
//     )
// }
