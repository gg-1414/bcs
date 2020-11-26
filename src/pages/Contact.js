import React from 'react';
import IGIcon from '../assets/images/ig.svg';
import '../styles/pages/Contact.scss';

const Contact = () => {
  return (
    <section className="Contact">
      <div className="container">
        <a href="https://www.instagram.com/bestcasescenarionyc" target="_blank" rel="noopener noreferrer">
          <img src={IGIcon} alt="Instagram icon" />
        </a>
        <p className="email">info@bestcasescenario.nyc</p>
      </div>
    </section>
  )
}

export default Contact;