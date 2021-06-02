import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IStore } from 'redux/types';
import routes from 'routes';
import useStyles from 'pages/cart/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartForAppBar() {
  const classes = useStyles();
  const cartBeerFromRedux: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
  const cartLength = cartBeerFromRedux.items.length;
  return (
    <>
      <Link className={classes.buttonLink} to={routes.cart()}>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Link>
      {!!cartLength && <div className={classes.div}>{cartLength}</div>}
    </>
  );
}
