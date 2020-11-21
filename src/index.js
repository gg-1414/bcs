import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import './app.css'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'test-bcs.myshopify.com',
  storefrontAccessToken: '993c1dbeb63d365ea563131a3de17654'
});

ReactDOM.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
