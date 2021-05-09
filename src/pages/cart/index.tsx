import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader } from '@material-ui/core';
import { IStore } from 'redux/types';
import { useSelector, useDispatch } from 'react-redux';

const Cart: React.FC = () => {
  const classes = useStyles();
  const beerCart: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
  console.log(beerCart);
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Cart" />
      </Card>
    </>
  );
};
export default Cart;
