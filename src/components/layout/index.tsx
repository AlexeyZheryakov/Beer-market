import React from 'react';
import { AppBar, Typography, Grid } from '@material-ui/core';
import CartForAppBar from 'pages/cart/cartForAppBar';
import Menu from 'components/menu';
import Collapse from '@material-ui/core/Collapse';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import useStyles from 'components/layout/styles';

const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="secondary">
        <Grid container>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.typography} variant="h5">
            Beans Love Beers
          </Typography>
          <div className={classes.div}>
            <CartForAppBar />
          </div>
        </Grid>
      </AppBar>
      <Grid container direction="row">
        <Collapse className={classes.gridMenu} in={open} timeout="auto" unmountOnExit>
          <Menu />
        </Collapse>
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
