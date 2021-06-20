import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from 'routes';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { theme } from 'App';

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

const Menu: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  return (
    <>
      {pathname === '/' && <Redirect to="/lightBeer" />}
      <List>
        <ListItem>Beer strength</ListItem>
        <Link className={classes.buttonLink} to={routes.main('lightBeer')}>
          <ListItem button> Light Beer</ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('regularBeer')}>
          <ListItem button> Regular Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('strongBeer')}>
          <ListItem button> Strong Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('veryStrongBeer')}>
          <ListItem button> Very Strong Beer </ListItem>
        </Link>
        <ListItem>Bitterness of beer</ListItem>
        <Link className={classes.buttonLink} to={routes.main('americanLightLager')}>
          <ListItem button> American Light Lager </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('scottishAle')}>
          <ListItem button> Scottish Ale </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('porter')}>
          <ListItem button> Porter </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('englishBitter')}>
          <ListItem button> English Bitter </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('stout')}>
          <ListItem button> Stout </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('veryStrongBeer')}>
          <ListItem button> Very Strong Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('veryStrongBeer')}>
          <ListItem button> Very Strong Beer </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main('veryStrongBeer')}>
          <ListItem button> Very Strong Beer </ListItem>
        </Link>
      </List>
    </>
  );
};

export default Menu;
