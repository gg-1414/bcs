import React from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <p>© 2020  Best Case Scenario NYC</p>
      <div>
        <a href="/terms">TERMS</a>
        <a href="/privacy">PRIVACY</a>
        <a href="/">SIGN UP</a>
      </div>
    </footer>
  )
}

export default Footer;
