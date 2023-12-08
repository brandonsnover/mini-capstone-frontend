/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
export function CartIndex(props) {
  useEffect(props.onHandleCartedProducts, []);

  return (
    <div>
      <h1 className="text-2xl">Your Cart</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Checkout</button>
      <div className="grid grid-cols-4 gap-4">
        {props.cart.map((carted_product) => (
          <div key={carted_product.id}>
            <h3>{carted_product.name}</h3>
            <p>Name: {carted_product.product.name}</p>
            <p>Price: ${carted_product.product.price}</p>
            <div>
              {carted_product.images.map((image) => (
                <div key={image.id}>
                  <img src={image.url} />
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => props.onDestroyCartedProduct(carted_product)}
            >
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
