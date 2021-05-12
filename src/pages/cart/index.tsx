import React from 'react';
import useStyles from 'pages/cart/styles';
import routes from 'routes';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Divider,
  Breadcrumbs,
  CircularProgress,
  Typography,
  Box,
  CardActions,
  Button,
  TextField,
  Grid,
  CardContent,
} from '@material-ui/core';
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
        <Divider />
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <Link className={classes.buttonLink} color="inherit" to={routes.main()}>
            Catalog
          </Link>
          <Typography color="textPrimary">Cart</Typography>
        </Breadcrumbs>
        {beerCart.items.map((beer) => (
          <Grid item key={beer.id}>
            <Card className={classes.card}>
              <CardHeader title={beer.name} />
              <CardContent>
                <img className={classes.img} src={beer.image_url} alt="img" />
                <Typography>{beer.name}</Typography>
                <Typography>{beer.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Card>
    </>
  );
};
export default Cart;
