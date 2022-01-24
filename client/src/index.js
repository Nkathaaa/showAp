import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from "./store/reducers";
import promiseMiddleware from "redux-promise";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const createStoreWithMiddleware =applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider  store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
</Provider>
,document.getElementById('root'));

