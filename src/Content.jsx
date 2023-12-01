import { ProductsIndex } from "./ProductsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsShowPage } from "./ProductsShowPage";
import { Login } from "./Login";
import { CartIndex } from "./CartIndex";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    axios.get("http://localhost:3000/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCartProduct = (params) => {
    axios.post("http://localhost:3000/carted_products.json", params);
    console.log(params);
  };

  const handleDestroyCartedProduct = (carted_product) => {
    axios.delete(`http://localhost:3000/carted_products/${carted_product.id}.json`);
  };

  const [cart, setCart] = useState([]);

  const handleCartedProducts = () => {
    axios.get("http://localhost:3000/carted_products.json").then((response) => {
      setCart(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductsIndex products={products} />} />
        <Route path="/products/:id" element={<ProductsShowPage onCartProduct={handleCartProduct} />} />
        <Route
          path="/cart"
          element={
            <CartIndex
              cart={cart}
              onHandleCartedProducts={handleCartedProducts}
              onDestroyCartedProduct={handleDestroyCartedProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}
