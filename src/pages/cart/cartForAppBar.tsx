import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IStore } from 'redux/types';
import paths from 'routes/config';
import useStyles from 'pages/cart/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartForAppBar: FC = () => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const cartBeerFromRedux: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
  const cartLength = cartBeerFromRedux.items.length;
  return (
    <>
      <Link className={classes.buttonLink} to={paths.cart(pathname.split('/')[1])}>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Link>
      {!!cartLength && <div className={classes.div}>{cartLength}</div>}
    </>
  );
};

export default CartForAppBar;
