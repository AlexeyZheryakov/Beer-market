import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Api from 'Api/beer';
import Сart from 'pages/cart';
import Home from 'pages/home';
import Details from 'pages/details';
import Order from 'pages/order';
import routes from 'routes';
import { applyMiddleware, createStore } from 'redux';

const listReducer = (state = { data:{} }, action: { type: string; list: any }) => {
  switch (action.type) {
    case 'INIT':
      return { data: action.list };
    default:
      return state;
  }
};
const store = createStore(listReducer);

export default function App() {
  React.useEffect(() => {
    Api.getBeer().then((data) => store.dispatch({ type: 'INIT', list: data }));
  }, []);

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
