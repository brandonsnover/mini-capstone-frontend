/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function ProductsShowPage(props) {
  const pageparams = useParams();
  console.log("words", pageparams);

  const handleClick = () => {
    const params = { product_id: props.product.id };
    props.onCartProduct(params);
  };

  useEffect(() => props.onShowProduct(pageparams), []);

  return (
    <div>
      <h1>{props.product.name}</h1>
      <p>{props.product.description}</p>
      <p>Price: ${props.product.price}</p>
      {/* <div>
        {props.product.images.map((image) => (
          <div key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div> */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        add to cart
      </button>
    </div>
  );
}
