import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from 'routes';
import { Link, Redirect, useLocation } from 'react-router-dom';
import { beerStrengthСonfig, bitternessOfBeerСonfig, coloursConfig } from 'components/menu/config';
import { IBeerStrengthСonfig, IBitternessOfBeerСonfig, IColoursConfig } from 'components/menu/types';

const useStyles = makeStyles(() => ({
  buttonLink: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Menu: React.FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const selected = pathname.split('/')[1];
  return (
    <>
      {pathname === '/' && <Redirect to="/lightBeer" />}
      <List>
        <ListItem>Beer Strength</ListItem>
        {Object.keys(beerStrengthСonfig).map((categoryName) => (
          <Link key={categoryName} className={classes.buttonLink} to={routes.main(categoryName)}>
            <ListItem selected={selected === categoryName} button>
              {beerStrengthСonfig[categoryName as keyof IBeerStrengthСonfig].label}
            </ListItem>
          </Link>
        ))}
        <ListItem>Bitterness Of Beer</ListItem>
        {Object.keys(bitternessOfBeerСonfig).map((categoryName) => (
          <Link key={categoryName} className={classes.buttonLink} to={routes.main(categoryName)}>
            <ListItem selected={selected === categoryName} button>
              {bitternessOfBeerСonfig[categoryName as keyof IBitternessOfBeerСonfig].label}
            </ListItem>
          </Link>
        ))}
        <ListItem>Colours</ListItem>
        {Object.keys(coloursConfig).map((categoryName) => (
          <Link key={categoryName} className={classes.buttonLink} to={routes.main(categoryName)}>
            <ListItem selected={selected === categoryName} button>
              {coloursConfig[categoryName as keyof IColoursConfig].label}
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Menu;
