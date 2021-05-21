import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
