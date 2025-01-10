import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from "react";

const DessertCard = ({ dessert, addToCart }) => {
  const { images, name, price, category } = dessert;

  return (
    <div className="dessert-card">
      <img
        src={`https://res.cloudinary.com/dc2c49xov/desserts/${images.thumbnail}`}
        alt={name}
      />
      
      <p>{category}</p>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => addToCart(dessert) }> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
    </div>
  );
};

export default DessertCard; 

