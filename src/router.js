import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import DesafioPage from './components/desafio/DesafioPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DesafioPage} />
  </Route>
);
