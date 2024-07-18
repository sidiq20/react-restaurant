import React from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 1;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00am and {closeHour}:00am.
        </p>
      )}

      <div className="address">
        <p>2737, cityville , umami_city</p>
        <p>Email: info@umamicity.com</p>
      </div>

      <div className="social-icons">
        <a
          href="https://www.instagram.com/your_social_handle/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaInstagram className="icon" />
        </a>
        {/* <a
          href="https://www.tiktok.com/your_tiktok_handle/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaTiktok className="icon" />
        </a> */}
        <a
          href="https://wa.me/123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaWhatsapp className="icon" />
        </a>
        {/* <a
          href="tel:+123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaPhone className="icon" />
        </a> */}
      </div>
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
    </div>
  );
}

export default Footer;

// add your socialmedia handle if you want to make it look real 