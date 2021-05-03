import React from 'react';
import useStyles from 'pages/order/styles';
import { Card, CardHeader } from '@material-ui/core';

const Order: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title="Ordering" />
      </Card>
    </>
  );
};
export default Order;
