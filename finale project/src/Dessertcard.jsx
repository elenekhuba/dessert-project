import React from "react";

const DessertCard = ({ dessert, addToCart }) => {
  const { images, name, price, category } = dessert;

  return (
    <div className="dessert-card">
      <img
        src={`https://res.cloudinary.com/dc2c49xov/desserts/${images.thumbnail}`}
        alt={name}
      />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price.toFixed(2)}</p>
      <button onClick={() => addToCart(dessert)}>Add to Cart</button>
    </div>
  );
};

export default DessertCard;