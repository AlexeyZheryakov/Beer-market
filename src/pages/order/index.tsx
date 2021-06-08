import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader, Breadcrumbs, Typography, Divider, Grid, TextField, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from 'routes';

const Order: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Ordering" />
        <Divider />
        <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
          <Link className={classes.buttonLink} color="inherit" to={routes.main()}>
            Catalog
          </Link>
          <Typography color="textPrimary">Ordering</Typography>
        </Breadcrumbs>
        <CardContent>
          <Grid container spacing={2}>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Name</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth id="name-order" size="small" label="Name" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Last name</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth id="last-name-order" size="small" label="Last name" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Phone</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth id="phone-order" size="small" label="Phone" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Email</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth id="email-order" size="small" label="Email" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Card number</Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth id="card-number-order" size="small" label="Card number" />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid className={classes.gridItemLabel} item xs={1}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField id="card-number-order" size="small" label="Street" />
              </Grid>
              <Grid item xs={1}>
                <TextField id="card-number-order" size="small" label="House number" />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default Order;
