import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Сart from 'pages/cart';
import Home from 'pages/home';
import Cat from 'pages/category';
import Details from 'pages/details';
import Order from 'pages/order';
import routes from 'routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from 'components/layout';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000000',
    },
    secondary: {
      light: '#ffff6e',
      main: '#cddc39',
      dark: '#99aa00',
      contrastText: '#000000',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
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
            <Route path={routes.category()}>
              <Cat />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
