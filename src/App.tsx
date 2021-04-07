import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Api from 'Api/beer';
import Сart from 'pages/cart';
import Home from 'pages/home';
import Details from 'pages/details';
import Order from 'pages/order';
import routes from 'routes';

export default function App() {
  Api.getBeer();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>Bear-Market</li>
          </ul>
        </nav>

        <Switch>
          <Route path={routes.order()}>
            <Order />
          </Route>
          <Route path={routes.details()}>
            <Details />
          </Route>
          <Route path={routes.cart()}>
            <Сart />
          </Route>
          <Route path={routes.main()}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
