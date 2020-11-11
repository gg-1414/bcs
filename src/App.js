import React from 'react';
import './App.scss';
import { Nav } from './containers/nav';
import { Dice } from './containers/dice';
import { Newsletter } from './containers/newsletter';

const App = () => (
  <div className="h-100">
    <div className="h-100">
      test
      <Nav />
      <Dice />
      <Newsletter />
    </div>
  </div>

);

export default App;
