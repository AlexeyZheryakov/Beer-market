import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader, Breadcrumbs, Typography, Divider, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { Formik } from 'formik';
import constants from 'pages/order/constants';
import OrderForm from 'pages/order/orderForm';

const Order: React.FC = () => {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 2);
  const classes = useStyles();
  return (
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
        <Formik
          initialValues={constants.initialValues}
          validateOnBlur
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={constants.validationsShema}
        >
          {OrderForm}
        </Formik>
      </CardContent>
    </Card>
  );
};
export default Order;
