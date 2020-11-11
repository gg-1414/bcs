import React from 'react';
import './App.scss';
import { Nav } from './containers/nav';
import { Dice } from './containers/dice';
import { Newsletter } from './containers/newsletter';
import { Countdown } from './containers/countdown';

const App = () => (
  <div className="h-100">
    <div className="h-100">
      <Nav />
      <Dice />
      <Countdown />
      <Newsletter />
    </div>
  </div>

);

export default App;
