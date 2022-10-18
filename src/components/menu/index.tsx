import React, { FC } from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import paths from 'routes/config';
import { Link, useLocation } from 'react-router-dom';
import { beerStrengthСonfig, bitternessOfBeerСonfig, coloursConfig } from 'components/menu/config';

const useStyles = makeStyles(() => ({
  buttonLink: {
    textDecoration: 'none',
    color: 'black',
  },
}));

const Menu: FC = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const selected = pathname.split('/')[1];
  return (
    <List>
      <ListItem>Beer Strength</ListItem>
      {Object.entries(beerStrengthСonfig).map(([categoryName, category]) => (
        <Link key={categoryName} className={classes.buttonLink} to={paths.main(categoryName)}>
          <ListItem selected={selected === categoryName} button>
            {category.label}
          </ListItem>
        </Link>
      ))}
      <ListItem>Bitterness Of Beer</ListItem>
      {Object.entries(bitternessOfBeerСonfig).map(([categoryName, category]) => (
        <Link key={categoryName} className={classes.buttonLink} to={paths.main(categoryName)}>
          <ListItem selected={selected === categoryName} button>
            {category.label}
          </ListItem>
        </Link>
      ))}
      <ListItem>Colours</ListItem>
      {Object.entries(coloursConfig).map(([categoryName, category]) => (
        <Link key={categoryName} className={classes.buttonLink} to={paths.main(categoryName)}>
          <ListItem selected={selected === categoryName} button>
            {category.label}
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default Menu;
