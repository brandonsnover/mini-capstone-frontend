/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
export function CartIndex(props) {
  useEffect(props.onHandleCartedProducts, []);

  return (
    <div>
      <h1>Your Cart</h1>
      {props.cart.map((carted_product) => (
        <div key={carted_product.id}>
          <h3>{carted_product.name}</h3>
          <p>Name: {carted_product.product.name}</p>
          <p>Price: {carted_product.product.price}</p>
          <button onClick={() => props.onDestroyCartedProduct(carted_product)}>Remove from Cart</button>
        </div>
      ))}
    </div>
  );
}
