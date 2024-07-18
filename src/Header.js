import React from 'react';
import { Link } from 'react-router-dom';
import 'tachyons/css/tachyons.min.css'; // Ensure Tachyons is imported
import './Header.css'; // Import Header specific CSS

function Header({ cartCount }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header flex items-center justify-between">
      <a href="#header" onClick={scrollToTop} className="no-underline flex items-center">
        <img src="/foods/UMAMI.png" alt="Focaccia" className="header-img" />
      </a>
      <Link to="/cart" className="cart-button">
        <i className="fas fa-shopping-cart"></i> Cart ({cartCount})
      </Link>
    </header>
  );
}

export default Header;
