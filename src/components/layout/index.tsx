import React from 'react';
import { AppBar, Typography, Grid, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';
import cartForAppBar from 'pages/cart/cartForAppBar';
import routes from 'routes';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    flexGrow: 1,
    margin: theme.spacing(1),
  },
  div: {
    paddingRight: theme.spacing(3),
  },
  buttonLink: {
    textDecoration: 'none',
  },
}));

const Layout = (props: LayoutProps) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Grid container>
          <Typography className={classes.typography} variant="h5">
            Beans Love Beers
          </Typography>
          <div className={classes.div}>{cartForAppBar()}</div>
        </Grid>
      </AppBar>
      <List>
        <ListItem>123</ListItem>
        <Link className={classes.buttonLink} to={routes.category('lightBeer')}>
          <ListItem button> Light Beer</ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.category('regularBeer')}>
          <ListItem button> Regular Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.category('strongBeer')}>
          <ListItem button> Strong Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.category('veryStrongBeer')}>
          <ListItem button> Very Strong Beer </ListItem>
        </Link>
      </List>
      {children}
    </div>
  );
};

export default Layout;
