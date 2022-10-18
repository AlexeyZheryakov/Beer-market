import React, { FC } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { AppBar, Typography, Grid } from '@material-ui/core';
import CartForAppBar from 'pages/cart/cartForAppBar';
import useStyles from './styles';

interface IProps {
  openMenuHandler: () => void;
}

const Header: FC<IProps> = ({ openMenuHandler }) => {
  const classes = useStyles();
  const onMenuClickHandler = () => {
    openMenuHandler();
  };

  return (
    <AppBar color="secondary">
      <Grid container>
        <IconButton
          onClick={onMenuClickHandler}
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
  );
};

export default Header;
