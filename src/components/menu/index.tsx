import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import routes from 'routes';
import { Link, Redirect, useLocation } from 'react-router-dom';
import config from 'components/menu/config';

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
        {Object.keys(config).map((item) => {
          if (config[item].disabled) {
            return <ListItem key={item}>{config[item].label}</ListItem>;
          }
          return (
            <Link key={item} className={classes.buttonLink} to={routes.main(item)}>
              <ListItem selected={selected === item} button>
                {config[item].label}
              </ListItem>
            </Link>
          );
        })}
      </List>
    </>
  );
};

export default Menu;
