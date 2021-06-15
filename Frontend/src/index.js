import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Watchlist from './pages/watchlist/Watchlist';
import Details from './pages/details/Details';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(

  //router configuration for the app
  <Router>
    <Switch>
      <Route path="/details">

        route /details
        <Details></Details>
      </Route>
      <Route path="/watchlist">

        route /watchlist
        <Watchlist></Watchlist>
      </Route>
      <Route path="/">
        route /
        <Watchlist></Watchlist>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
