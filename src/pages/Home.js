import React from 'react';
import { Newsletter } from '../containers/newsletter.js';
import diceGif from '../assets/images/dice.gif';
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <section className="Home">
      <img src={diceGif} style={{margin:"auto"}} alt="Home page dice animation"/>
      <Newsletter/>
    </section>
  )
}

export default Home;