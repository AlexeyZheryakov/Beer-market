import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Сart from 'pages/cart';
import Home from 'pages/home';
import Details from 'pages/details';
import Order from 'pages/order';
import routes from 'routes';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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

const useStyles = makeStyles(() => ({
  root: {
    padding: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <AppBar color="secondary" className={classes.root}>
            <Typography variant="h5">Beans Love Beers</Typography>
          </AppBar>
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
    </ThemeProvider>
  );
}
