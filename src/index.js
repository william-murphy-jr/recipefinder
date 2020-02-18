import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

let store = createStore(rootReducer);

store.subscribe(() => console.log('store.getState() ', store.getState()));


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));