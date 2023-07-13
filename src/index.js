import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import * as ReactDOMClient from 'react-dom/client';
// import * as ReactDOMServer from 'react-dom/server';
import {createRoot} from 'react-dom/client';
import App from './App';
import store from './app/store'
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

 const root = createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
  <App />
</Provider>
//,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
