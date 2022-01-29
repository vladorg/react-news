import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '~ROOT/sass/main.sass';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '~s/reducers';

let store = createStore(reducers, compose(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}><App/></Provider>, 
  document.querySelector('#app')
);

