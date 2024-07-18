import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

function Cart({ cart, removeFromCart, removeAllFromCart }) {
  const total = cart.reduce((acc, food) => acc + food.price, 0);
  const whatsappNumber = '12345678900';

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';

    const foodItems = cart.map(food => `${food.name} - ₦${food.price.toFixed(2)}`).join('\n');
    const totalText = `Total: ₦${total.toFixed(2)}`;
    return `My name is *username* , I would like to buy:\n${foodItems}\n\n${totalText}`;
  };

  const whatsappMessage = encodeURIComponent(generateWhatsAppMessage());
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="cart-page">
      <header className="cart-header">
        <Link to="/" className="back-button">&larr; Back</Link>
        <h1>Your Cart</h1>
      </header>
      <main className="cart-content">
        {cart.length > 0 ? (
          <>
            <ul className="cart-items">
              {cart.map((food, index) => (
                <li key={index} className="cart-item">
                  <span className="food-name">{food.name}</span>
                  <span className="food-price">₦{food.price.toFixed(2)}</span>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(food)}
                  >
                    &minus;
                  </button>
                </li>
              ))}
            </ul>
            <div className="total">
              <span className="total-label">Total:</span>
              <span className="total-price">₦{total.toFixed(2)}</span>
            </div>
            <a href={whatsappLink} className="checkout-btn" target="_blank" rel="noopener noreferrer">Checkout</a>
            <button onClick={removeAllFromCart} className="remove-all-btn">Remove All</button>
          </>
        ) : (
          <p>No foods in cart.</p>
        )}
      </main>
      <footer className="cart-footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default Cart;
