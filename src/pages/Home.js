import React from 'react';
import diceGif from '../assets/images/dice.gif';
import '../styles/pages/Home.scss';

const Home = () => {
  return (
    <section className="Home">
      <img src={diceGif} style={{margin:"auto"}} alt="Home page dice animation"/>
    </section>
  )
}

export default Home;