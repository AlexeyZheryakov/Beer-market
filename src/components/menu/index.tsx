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
        <ListItem key="beerStrength">Beer Strength</ListItem>
        {Object.keys(beerStrengthСonfig).map((item) => (
          <Link key={item} className={classes.buttonLink} to={routes.main(item)}>
            <ListItem selected={selected === item} button>
              {beerStrengthСonfig[item as keyof IBeerStrengthСonfig].label}
            </ListItem>
          </Link>
        ))}
        <ListItem key="bitternessOfBeer">Bitterness Of Beer</ListItem>
        {Object.keys(bitternessOfBeerСonfig).map((item) => (
          <Link key={item} className={classes.buttonLink} to={routes.main(item)}>
            <ListItem selected={selected === item} button>
              {bitternessOfBeerСonfig[item as keyof IBitternessOfBeerСonfig].label}
            </ListItem>
          </Link>
        ))}
        <ListItem key="colours">Colours</ListItem>
        {Object.keys(coloursConfig).map((item) => (
          <Link key={item} className={classes.buttonLink} to={routes.main(item)}>
            <ListItem selected={selected === item} button>
              {coloursConfig[item as keyof IColoursConfig].label}
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Menu;
