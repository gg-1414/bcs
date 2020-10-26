import React from 'react';
import './App.scss';
import { Nav } from './containers/nav';
import { Dice } from './containers/dice';
import { Newsletter } from './containers/newsletter';

const App = () => (
  <div style={{ 'height': '100vh' }}>
    <div className="h-100">
      <Nav />
      <Dice />
      <Newsletter />
    </div>
  </div>

);

export default App;
