import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Client from 'shopify-buy';
import './app.css'

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: 'best-case-scenario-nyc.myshopify.com',
  storefrontAccessToken: '4e94632ef345be02a7492f55a4d97b2e'
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
