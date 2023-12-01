/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function ProductsIndex(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Our Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {props.products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            {/* <img src={product.images[0].url} /> */}
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
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
