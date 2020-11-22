import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Media from 'react-media';
import Lookbook from '../pages/Lookbook';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import logo from '../assets/images/bcsglobewhite.png';
import CartIcon from './icons/cart.js';
import '../styles/components/Header.scss';

class Header extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleMenuToggle();
  }

  render() {
    const { handleCartToggle, isMenuOpen, handleMenuToggle } = this.props; 

    return (
      <Router>
        <header className="Header">
          <nav>
            <Media query="(max-width: 1279px)">
              {matches => (
                matches ? (
                  <button 
                    className={isMenuOpen ? "HamburgerButton open" : "HamburgerButton closed"}
                    onClick={handleMenuToggle}
                  >
                    <div/>
                    <div/>
                    <div/>
                  </button>
                ) : (
                  <>
                    <button className="Header--view-cart" style={{visibility:"hidden"}}>
                      <CartIcon/>
                    </button>
                    <NavLink to="/lookbook">Lookbook</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                  </>
                )
              )}
            </Media>

            <NavLink to="/" className="logo">
              <img src={logo} alt="Best Case Scenario logo"/>
            </NavLink>

            <Media query="(min-width: 1280px)">
              {matches => (
                matches ? (
                  <>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </>
                ) : null
              )}
            </Media>

            <button className="Header--view-cart" onClick={handleCartToggle}>
              <CartIcon/>
            </button>
          </nav>
        </header>

        <Media query="(max-width: 1279px)">
          {matches => (
            matches ? (
              <div className={isMenuOpen ? "MobileMenu open" : "MobileMenu closed"}>
                <nav>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/"
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/shop"
                  >
                    Shop
                  </NavLink>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/lookbook"
                  >
                    Lookbook
                  </NavLink>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/about"
                  >
                    About
                  </NavLink>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                  <NavLink 
                    exact 
                    onClick={this.handleClick}
                    to="/cart"
                  >
                    Cart
                  </NavLink>
                </nav>
              </div>
            ) : null
          )}
        </Media>
  
        <Switch>
          <Route exact path="/shop">
            <Shop
              products={this.props.products}
              client={this.props.client}
              addVariantToCart={this.props.addVariantToCart}
            />
          </Route>
          <Route exact path="/lookbook" component={Lookbook}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default Header;
