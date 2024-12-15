import React from "react";
import data from "./data.json";
import DessertCard from "./Dessertcard";

function App() {
  return (
    <div>
      <h1>Dessert Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((dessert) => (
          <DessertCard
            key={dessert.id}
            name={dessert.name}
            category={dessert.category}
            price={dessert.price}
            image={dessert.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;