import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Сart from 'pages/cart';
import Home from 'pages/home';
import Details from 'pages/details';
import Order from 'pages/order';
import Layout from 'components/layout';
import paths from './config';

const СonfiguredRoutes: FC = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path={paths.order()}>
          <Order />
        </Route>
        <Route path={paths.details()}>
          <Details />
        </Route>
        <Route path={paths.cart()}>
          <Сart />
        </Route>
        <Route path={paths.main()}>
          <Home />
        </Route>
      </Switch>
    </Layout>
  </Router>
);

export default СonfiguredRoutes;
