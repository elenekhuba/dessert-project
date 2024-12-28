import React, { useState } from "react";
import desserts from "./data.json";
import DessertCard from "./DessertCard";
import Cart from "./Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    const existingItem = cart.find((item) => item.name === dessert.name);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));
  };

  return (
    <div className="app">
      <div className="dessert-list">
        <h1>Desserts</h1>
        <div className="cards">
          {desserts.map((dessert) => (
            <DessertCard
              key={dessert.name}
              dessert={dessert}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;