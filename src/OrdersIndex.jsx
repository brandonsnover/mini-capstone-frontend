/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";

export function OrdersIndex(props) {
  console.log(props.orders);
  useEffect(props.onHandleIndexOrders, []);

  return (
    <div>
      <h1>Your past orders</h1>
      <div className="grid grid-cols-4 gap-4">
        {props.orders.map((order) => (
          <div key={order.id}>
            <p>Subtotal: ${order.subtotal}</p>
            <p>Tax: ${order.tax}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
