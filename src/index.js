import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers' ;

//calling 1st 
const store = createStore(movies);
console.log('store' , store);
// console.log('BEFORE STATE' , store.getState());

// store.dispatch({
//   type : 'ADD_MOVIE',
//   movies : [{name : 'SUPERMAN'}]
// });

// console.log('AFTER STATE' , store.getState());
//render
ReactDOM.render(
  <App store={store}></App>,
  document.getElementById('root')
);


