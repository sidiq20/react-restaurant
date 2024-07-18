import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'tachyons';
import foodData from './foodData';

// Lazy load components
const Header = lazy(() => import('./Header'));
const Menu = lazy(() => import('./Menu'));
const Cart = lazy(() => import('./Cart'));
const Footer = lazy(() => import('./Footer'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foodData,
      searchfield: '',
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      isCartVisible: false
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.cart !== this.state.cart) {
      localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }
  }

  addToCart = (food) => {
    if (!food.soldOut) {
      this.setState(prevState => ({
        cart: [...prevState.cart, food],
        isCartVisible: true
      }));
    }
  };

  removeFromCart = (food) => {
    this.setState(prevState => {
      const index = prevState.cart.findIndex(item => item.name === food.name);
      if (index >= 0) {
        const newCart = [...prevState.cart];
        newCart.splice(index, 1);
        return { cart: newCart };
      }
      return null;
    });
  };

  removeAllFromCart = () => {
    this.setState({ cart: [] });
  };

  render() {
    const { foods, cart } = this.state;
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );

    return (
      <Router>
        <div className="container">
          <Suspense fallback={<div>Loading...</div>}>
            <Header cartCount={cart.length} />
            <Routes>
              <Route
                path="/"
                element={
                  <div className="content">
                    <Menu foods={filteredFoods} addToCart={this.addToCart} removeFromCart={this.removeFromCart} />
                  </div>
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cart={cart}
                    removeFromCart={this.removeFromCart}
                    removeAllFromCart={this.removeAllFromCart}
                  />
                }
              />
            </Routes>
            <Footer />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
