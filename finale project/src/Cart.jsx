import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart ({cart.length})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div >
          {cart.map((item) => (
            <div key={item.name} className="cart-item">
            <p className="item-name">{item.name}</p>
            <div className="item-details">
              <span> {item.quantity}</span>
              <span> ${item.price.toFixed(2)}</span>
              <span> ${(item.price * item.quantity).toFixed(2)}</span>
              
            </div>
            <button onClick={() => removeFromCart(item.name)}>Remove</button>
          </div>
          
          
          ))}
        </div>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      {cart.length > 0 && <button>Confirm Order</button>}
    </div>
  );
};

export default Cart;