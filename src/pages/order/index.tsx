import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader, Breadcrumbs, Typography, Divider } from '@material-ui/core';
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
      </Card>
    </>
  );
};
export default Order;
