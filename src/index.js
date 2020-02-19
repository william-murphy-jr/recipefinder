import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FavoriteRecipeList from './components/FavoriteRecipeLists';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

let store = createStore(rootReducer);

store.subscribe(() => console.log('store.getState() ', store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/favorites" component={FavoriteRecipeList}/>
      </Switch>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));