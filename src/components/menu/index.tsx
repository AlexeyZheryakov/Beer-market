import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from 'routes';
import { Link, Redirect, useLocation } from 'react-router-dom';
import constants from 'components/menu/constants';

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
        <ListItem>Beer strength</ListItem>
        <Link className={classes.buttonLink} to={routes.main(constants.lightBeer)}>
          <ListItem selected={selected === constants.lightBeer} button>
            Light Beer
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.regularBeer)}>
          <ListItem selected={selected === constants.regularBeer} button>
            Regular Beer
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.strongBeer)}>
          <ListItem selected={selected === constants.strongBeer} button>
            Strong Beer
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.veryStrongBeer)}>
          <ListItem selected={selected === constants.veryStrongBeer} button>
            Very Strong Beer
          </ListItem>
        </Link>
        <ListItem>Bitterness of beer</ListItem>
        <Link className={classes.buttonLink} to={routes.main(constants.americanLightLager)}>
          <ListItem selected={selected === constants.americanLightLager} button>
            American Light Lager
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.scottishAle)}>
          <ListItem selected={selected === constants.scottishAle} button>
            Scottish Ale
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.porter)}>
          <ListItem selected={selected === constants.porter} button>
            Porter
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.englishBitter)}>
          <ListItem selected={selected === constants.englishBitter} button>
            English Bitter
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.stout)}>
          <ListItem selected={selected === constants.stout} button>
            Stout
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.indiaPaleAle)}>
          <ListItem selected={selected === constants.indiaPaleAle} button>
            India Pale Ale (IPA)
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.barleywine)}>
          <ListItem selected={selected === constants.barleywine} button>
            Barleywine
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.doubleOrImperial)}>
          <ListItem selected={selected === constants.doubleOrImperial} button>
            Double or Imperial IPA
          </ListItem>
        </Link>
        <ListItem>Colours</ListItem>
        <Link className={classes.buttonLink} to={routes.main(constants.pale)}>
          <ListItem selected={selected === constants.pale} button>
            Pale
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.lightBlond)}>
          <ListItem selected={selected === constants.lightBlond} button>
            Light blond
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.blond)}>
          <ListItem selected={selected === constants.blond} button>
            Blond
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.yellow)}>
          <ListItem selected={selected === constants.yellow} button>
            Yellow
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.gold)}>
          <ListItem selected={selected === constants.gold} button>
            Gold
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.amber)}>
          <ListItem selected={selected === constants.amber} button>
            Amber
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.copper)}>
          <ListItem selected={selected === constants.copper} button>
            Copper
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.darkCopper)}>
          <ListItem selected={selected === constants.darkCopper} button>
            Dark copper
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.brown)}>
          <ListItem selected={selected === constants.brown} button>
            Brown
          </ListItem>
        </Link>
        <Link className={classes.buttonLink} to={routes.main(constants.darkBrown)}>
          <ListItem selected={selected === constants.darkBrown} button>
            Dark brown
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default Menu;
