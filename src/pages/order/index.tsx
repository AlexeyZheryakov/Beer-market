import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader, Breadcrumbs, Typography, Divider, CardContent } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import routes from 'routes';
import { Formik } from 'formik';
import { initialValues, validationsShema } from 'pages/order/constants';
import OrderForm from 'pages/order/orderForm';
import Values from 'pages/order/types';
import { format } from 'date-fns';

const Order: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const handleSubmitClick = (values: Values) => {
    const { date } = values;
    const formatedDate = format(date, 'dd-MM-yy');
    const dataForSending = { ...values, date: formatedDate };
    // eslint-disable-next-line no-console
    console.log(dataForSending);
  };

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Ordering" />
      <Divider />
      <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
        <Link className={classes.buttonLink} color="inherit" to={routes.main(category)}>
          Catalog
        </Link>
        <Typography color="textPrimary">Ordering</Typography>
      </Breadcrumbs>
      <CardContent>
        <Formik
          initialValues={initialValues}
          validateOnBlur
          onSubmit={handleSubmitClick}
          validationSchema={validationsShema}
        >
          {OrderForm}
        </Formik>
      </CardContent>
    </Card>
  );
};
export default Order;
