import React from 'react';
import './App.scss';
import { Nav } from './containers/nav';
import { Dice } from './containers/dice';
import { Newsletter } from './containers/newsletter';
import { CountdownClock } from './containers/countdown-clock';

const App = () => (
  <div className="h-100">
    <div className="h-100">
      <Nav />
      <Dice />
      <CountdownClock />
      <Newsletter />
    </div>
  </div>

);

export default App;
