import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

export default function App() {
  function getBeer() {
    return axios.get('https://api.punkapi.com/v2/beers').then((response) => console.log(response));
  }

  getBeer();

  function Home() {
    return <h2>Home</h2>;
  }

  function Details() {
    return <h2>Details</h2>;
  }

  function Сart() {
    return <h2>Сart</h2>;
  }

  function Order() {
    return <h2>Order</h2>;
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/details">Детальная информация</Link>
            </li>
            <li>
              <Link to="/cart">Корзина</Link>
            </li>
            <li>
              <Link to="/order">Оформление заказа</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
