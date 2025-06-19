// components/Cart.jsx
import React from "react";

function Cart({ items }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title} - R{item.price}</li>
          ))}
        </ul>
      )}
      <p>Total: R{total}</p>
      <button disabled={items.length === 0}>Checkout</button>
    </div>
  );
}

export default Cart;