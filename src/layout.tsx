import React from 'react';
import { AppBar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from 'App';
import cartForAppBar from 'pages/cart/cartForAppBar';

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
      {children}
    </div>
  );
};

export default Layout;
