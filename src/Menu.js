import React from 'react';
import Food from './Food';

function Menu({ foods, addToCart, removeFromCart }) {
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu</h2>
      {numFoods > 0 ? (
        <>
          <ul className="foods">
            {foods.map((food) => (
              <Food foodObj={food} key={food.name} addToCart={addToCart} removeFromCart={removeFromCart} />
            ))}
          </ul>
        </>
      ) : (
        <p>No results found.</p>
      )}
    </main>
  );
}

export default Menu;
