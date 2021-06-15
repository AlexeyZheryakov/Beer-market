import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader, Breadcrumbs, Typography, Divider, CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { Formik } from 'formik';
import constants from 'pages/order/constants';
import OrderForm from 'pages/order/orderForm';
import Values from 'pages/order/types';
import { format } from 'date-fns';

const Order: React.FC = () => {
  function changeDateFormat(values: Values) {
    const { date } = values;
    const dateFormat = format(date, 'dd-MM-yy');
    const newValues = { ...values, date: dateFormat };
    // eslint-disable-next-line no-console
    console.log(newValues);
  }

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
            changeDateFormat(values);
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
