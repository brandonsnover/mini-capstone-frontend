/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export function ProductsIndex(props) {
  return (
    <div>
      <h1>Our Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          {/* <img src={product.images[0].url} /> */}
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
          <Link to={`/products/${product.id}`}>Go to Product Page</Link>
        </div>
      ))}
    </div>
  );
}
