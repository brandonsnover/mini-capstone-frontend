import { ProductsIndex } from "./ProductsIndex";
import axios from "axios";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsShowPage } from "./ProductsShowPage";
import { Login } from "./Login";
import { CartIndex } from "./CartIndex";
import { OrdersIndex } from "./OrdersIndex";

export function Content() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleIndexProducts = () => {
    axios.get("https://mini-capstone-api-ud5u.onrender.com/products.json").then((response) => {
      setProducts(response.data);
    });
  };

  const handleCartProduct = (params) => {
    axios.post("https://mini-capstone-api-ud5u.onrender.com/carted_products.json", params);
    console.log(params);
  };

  const handleDestroyCartedProduct = (carted_product) => {
    axios
      .delete(`https://mini-capstone-api-ud5u.onrender.com/carted_products/${carted_product.id}.json`)
      .then((response) => {
        console.log(response);
        setCart(cart.filter((r) => r.id !== carted_product.id));
      });
  };

  const handleCartedProducts = () => {
    axios.get("https://mini-capstone-api-ud5u.onrender.com/carted_products.json").then((response) => {
      setCart(response.data);
    });
  };

  const handleShowProduct = (params) => {
    axios.get(`https://mini-capstone-api-ud5u.onrender.com/products/${params.id}.json`).then((response) => {
      console.log("string", response);
      setProduct(response.data);
    });
  };

  const handleIndexOrders = () => {
    axios.get("https://mini-capstone-api-ud5u.onrender.com//orders.json").then((response) => {
      setOrders(response.data);
    });
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductsIndex products={products} onHandleIndexProducts={handleIndexProducts} />} />
        <Route
          path="/products/:id"
          element={
            <ProductsShowPage onCartProduct={handleCartProduct} onShowProduct={handleShowProduct} product={product} />
          }
        />
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
        <Route path="/orders" element={<OrdersIndex orders={orders} onHandleIndexOrders={handleIndexOrders} />} />
      </Routes>
    </div>
  );
}
