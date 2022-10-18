import React, { FC, useState } from 'react';

import Menu from 'components/menu';
import Collapse from '@material-ui/core/Collapse';

import useStyles from 'components/layout/styles';
import Footer from 'components/Footer';
import { Grid } from '@material-ui/core';
import Header from 'components/Header';
import { Redirect, useLocation } from 'react-router-dom';

const Layout: FC = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const openMenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header openMenuHandler={openMenuHandler} />
      <Grid container direction="row">
        {pathname === '/' && <Redirect to="/lightBeer" />}
        <Collapse className={classes.gridMenu} in={isMenuOpen} timeout="auto" unmountOnExit>
          <Menu />
        </Collapse>
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Layout;
