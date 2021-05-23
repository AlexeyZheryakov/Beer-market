import React from 'react';
import useStyles from 'pages/cart/styles';
import routes from 'routes';
import { Link } from 'react-router-dom';
import { Card, CardHeader, Divider, Breadcrumbs, Typography, CardActions, Button, Grid } from '@material-ui/core';
import { IStore } from 'redux/types';
import { useSelector } from 'react-redux';

const Cart: React.FC = () => {
  const classes = useStyles();
  const beerCart: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
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
        {beerCart.items.map((beer, index) => (
          <Grid container alignItems="flex-start" spacing={2} key={beer.id}>
            <Grid item>
              <img className={classes.img} src={beer.image_url} alt="img" />
            </Grid>
            <Grid item sm container spacing={2}>
              <Grid item xs={12}>
                <Typography>
                  {index + 1}
                  {`. `}
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
                  <Typography align="center">price: 3.50 $</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <CardActions>
          <Button color="primary" variant="contained">
            Go to ordering
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
export default Cart;
