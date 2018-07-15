import React from "react";
import { render } from 'react-dom';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import routes from "./router";
import { loadDesafio } from './actions/desafioActions';
import './styles/styles.css';
import './styles/reset.css';

const store = configureStore();
store.dispatch(loadDesafio());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
