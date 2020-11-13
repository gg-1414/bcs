import React from 'react';
import './App.scss';
import { Nav } from './containers/nav';
import { Dice } from './containers/dice';
import { Newsletter } from './containers/newsletter';
import { CountdownClock } from './containers/countdown-clock';
import moment from 'moment';

const App = () => (
  <div className="h-100">
    <div className="h-100">
      <Nav />
      <Dice />
      {moment() !== moment("2020-11-27T11:00:00").local() ?
        <CountdownClock />
        : null
      }
      <Newsletter />
    </div>
  </div>

);

export default App;
