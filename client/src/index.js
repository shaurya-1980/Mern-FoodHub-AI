import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles/global.css";
import { CartProvider } from "./context/CartContext";
import pizzaCursor from "./assets/pizza-cursor.png";
import "leaflet/dist/leaflet.css";

document.body.style.cursor = `url(${pizzaCursor}), auto`;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<React.StrictMode>
  <CartProvider>
    <App />
  </CartProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

