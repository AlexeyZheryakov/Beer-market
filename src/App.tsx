import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Api from './Api/beer';
import Сart from './pages/cart/cart';
import Home from './pages/home/home';
import Details from './pages/details/details';
import Order from './pages/order/order';

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
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/cart">
            <Сart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
