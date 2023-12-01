/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ProductsShowPage(props) {
  const [product, setProduct] = useState({});
  const pageparams = useParams();

  const handleShowProduct = () => {
    axios.get(`http://localhost:3000/products/${pageparams.id}.json`).then((response) => {
      setProduct(response.data);
    });
  };

  const handleClick = () => {
    const params = { product_id: pageparams.id };
    props.onCartProduct(params);
  };

  useEffect(handleShowProduct, []);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={handleClick}>add to cart</button>
    </div>
  );
}
