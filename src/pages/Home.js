import React from 'react';
import diceGif from '../assets/images/dice.gif';

const Home = () => {
  return (
    <div className="Home">
      <img src={diceGif} style={{margin:"auto"}} alt="Home page dice animation"/>
    </div>
  )
}

export default Home;