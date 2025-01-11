

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // აიქონებიდან აიმპორტირებს შოპინგ კარტს , პლიუსს და მინუსს

import React, { useState, useEffect } from "react";  

// DessertCard კომპონენტი იღებს 'dessert', 'addToCart', 'updateQuantity', 'cart' პარამეტრებს
const DessertCard = ({ dessert, addToCart, updateQuantity, cart }) => {
  const { images, name, price, category } = dessert;   // გამოაქვს დესერტის ინფორმაცია: სურათი, სახელი, ფასი და კატეგორია


  // ამოწმებს დესერტი არის თუ არა უკვე კალათაში და იღებს მის რაოდენობას
  const cartItem = cart.find((item) => item.name === name);
  const quantity = cartItem ? cartItem.quantity : 0; // თუ ნივთი არსებობს კალათასი გამოაქვს მისის რაოდენობა

  const [isClicked, setIsClicked] = useState(false);  // ქმნის სტეიტს "isClicked" ქვევით ღილაკის კონტროლისთვის

  useEffect(() => {
    // Reset გაუკეთოს წითელ ბორდერს თუ რაოდენობა გახდება 0
    if (quantity === 0) {
      setIsClicked(false);
    }
  }, [quantity]);  



  //ფუნქცია რომელიც აკონტროლებს დესერტის დამარტებას კალათაში
  const handleAddToCart = () => {
    addToCart(dessert); // იძახებს addToCart ფუნქციას კალათში ნივთის დამატებისთვის
    setIsClicked(true); // ისვამს "isClicked" სტეიტს true, რომ ღილაკი იყოს დადასტურებული
  };

  return (
    <div className={`dessert-card ${isClicked ? "clicked" : ""}`}>  {/* ემატება 'clicked' როცა ნივთი არის დამატებული*/}
      <img
        src={`https://res.cloudinary.com/dc2c49xov/desserts/${images.thumbnail}`}
        alt={name}
      />
      <p>{category}</p> {/*აჩვენებს კატეგორია ,სახელს(ქვემოთა) და ფასს (კიდე ქვემოთა) */}
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>

      <div className="button-container">
        {quantity > 0 ? (   // თუ ნივთის კალათაში რაოდენობა  0-ზე მეტია მაშინ ჩნდება ეს ყველაფერი
          <div className="quantity-controls">
            <button onClick={() => updateQuantity(name, -1)}>
              <FontAwesomeIcon icon={faMinus} />  {/* "Minus" აიკონი შემცირების ღილაკად */}
            </button>
            <span>{quantity}</span>  {/* აჩვენებს რაოდენობას */}
            <button onClick={() => updateQuantity(name, 1)}>
              <FontAwesomeIcon icon={faPlus} />  {/* "Plus" აიკონი დამატების ღილაკად */}
            </button>
          </div>
        ) : (
          <button
            className={isClicked ? "clicked-button" : ""}  // თუ ნივთი უკვე კალათაში დამატებულია, ღილაკს ეძლევა სპეციალური კლასი
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default DessertCard;



