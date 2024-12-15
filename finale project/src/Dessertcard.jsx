import React from "react";

const DessertCard = ({ name, category, price, image }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={image} alt={name} style={{ width: "100px", height: "100px" }} />
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default DessertCard;