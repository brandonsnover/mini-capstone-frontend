/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useEffect } from "react";
export function ProductsIndex(props) {
  useEffect(props.onHandleIndexProducts, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Our Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {props.products.map((product) => (
          <div className="border-solid border-2 border-black shadow-md p-4" key={product.id}>
            <h3 className="text-2xl font-bold">{product.name}</h3>
            <div>
              {product.images.map((image) => (
                <div key={image.id}>
                  <img src={image.url} />
                </div>
              ))}
            </div>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              to={`/products/${product.id}`}
            >
              Go to Product Page
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
