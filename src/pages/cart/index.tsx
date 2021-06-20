import React from 'react';
import useStyles from 'pages/cart/styles';
import routes from 'routes';
import { Link, useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  Divider,
  Breadcrumbs,
  Typography,
  CardActions,
  Button,
  Grid,
  CardContent,
} from '@material-ui/core';
import { IStore } from 'redux/types';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const classes = useStyles();
  const beerCart: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
  const totalCount = Object.values(beerCart.selectedIds).reduce((total, count) => total + count, 0);
  const price = 3.5;
  const totalPrice = totalCount * price;
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Cart" />
        <Divider />
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <Link className={classes.buttonLink} color="inherit" to={routes.main(category)}>
            Catalog
          </Link>
          <Typography color="textPrimary">Cart</Typography>
        </Breadcrumbs>
        <CardContent className={classes.cardContent}>
          {beerCart.items.map((beer, index) => (
            <Grid container alignItems="flex-start" spacing={5} key={beer.id}>
              <Grid item container xs={1} justify="center">
                <img className={classes.img} src={beer.image_url} alt="img" />
              </Grid>
              <Grid item sm container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    <span className={classes.span}>{index + 1}.</span>
                    {beer.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} container direction="row">
                  <Grid item xs={1}>
                    <Typography>Description:</Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography>{beer.description}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} container direction="row">
                  <Grid item xs={1}>
                    <Typography>
                      {`Count: `}
                      {beerCart.selectedIds[beer.id]}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography align="center">price: {beerCart.selectedIds[beer.id] * price}$</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Typography variant="h4">TOTAL:{totalPrice}$</Typography>
          <Link className={classes.buttonLink} to={routes.order(category)}>
            <Button color="primary" variant="contained">
              Go to ordering
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};
export default Cart;
