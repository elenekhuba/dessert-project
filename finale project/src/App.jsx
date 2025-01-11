import React, { useState } from "react";  //  აიმპორტებს რეაქტს და usestateს
import desserts from "./data.json";        //  აიმპორტებს დესერტების სიას ჯეისონ ფაილიდან 
import DessertCard from "./DessertCard";   //  აიმპორტებს დესერტკარდის კომპონენტეტბს
import Cart from "./Cart";                 //  აიმპორტებს კარტის კომპონენტებს
import "./App.css";                       // აიმპორტებს ცსს-ს სტილისთვის

const App = () => {
  const [cart, setCart] = useState([]);  // ქმნის სთაითს რომელიც ინახავს არსებულ აითემებს (ნივთებს ) კალათაში

  //ფუნქცია რომლითაც ვამატებთ დესერტებს კალათაში
  const addToCart = (dessert) => {
    const existingItem = cart.find((item) => item.name === dessert.name);  // ამოწმებს თუ დესერტი უკვე კალათაშია
    if (existingItem) {  // თუ უკვე არსებობს მის რაოდენობას ერთით ზრდის 
      setCart(
        cart.map((item) =>
          item.name === dessert.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {  // თუ არ არსებობს ამატებს 1 ცალს არჩეულ დესერტს
      setCart([...cart, { ...dessert, quantity: 1 }]);
    }
  };

  // ფუნქცია ტკბილეულისრაოდენობის გასაზრდელათ კალათაში
  const updateQuantity = (name, delta) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0); // ამოშლის ნივთებს რომელთა რაოდენობა ნულია ან უარყოფითი
      return updatedCart;
    });
  };

  // ფუნქცია რომ მოვაშოროთ დესერტი კალათიდან
  const removeFromCart = (name) => {
    setCart(cart.filter((item) => item.name !== name));  // მოვაშოროთ დესერტი კალათიდან სახელის მიხედვით
  };

  return (
    <div className="app">
      <div className="dessert-list">
        <h1>Desserts</h1>
        <div className="cards">
          {desserts.map((dessert) => (
            <DessertCard
              key={dessert.name}  
              dessert={dessert}  // გადაიცემა ტკბილეულის მონაცემები DessertCard-ში  
              addToCart={addToCart} // გადაიცემა addToCart ფუნქცია DessertCard-ში 
              updateQuantity={updateQuantity}  // გადაიცემა updateQuantity ფუნქცია DessertCard-ში
              cart={cart}          
            />
          ))}
        </div>
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />  
    </div>
  );
};

export default App;  