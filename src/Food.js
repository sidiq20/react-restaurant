import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Food({ foodObj, addToCart, removeFromCart }) {
  return (
    <li className={`food ${foodObj.soldOut ? 'sold-out' : ''}`}>
      <img src={foodObj.photoName} alt={foodObj.name} />
      <div>
        <h3>{foodObj.name}</h3>
        <p className="ingredients">{foodObj.ingredients}</p>
        <span>{foodObj.soldOut ? 'SOLD OUT' : `₦${foodObj.price}`}</span>
        <div className="btn-whatsapp-container">
          <FaMinus 
            className={`icon ${foodObj.soldOut ? 'disabled' : ''}`} 
            onClick={() => !foodObj.soldOut && removeFromCart(foodObj)} 
          />
          <div className="icon-divider"></div>
          <FaPlus 
            className={`icon ${foodObj.soldOut ? 'disabled' : ''}`} 
            onClick={() => !foodObj.soldOut && addToCart(foodObj)} 
          />
        </div>
      </div>
    </li>
  );
}

export default Food;
