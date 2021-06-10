import React from 'react';
import useStyles from 'pages/order/styles';
import {
  Card,
  CardHeader,
  Breadcrumbs,
  Typography,
  Divider,
  Grid,
  TextField,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

const Order: React.FC = () => {
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 2);
  const classes = useStyles();
  const nameRegex = /^[a-zA-Z]+$/;
  const validationsShema = yup.object().shape({
    name: yup.string().required('Required field').matches(nameRegex, 'Name is not valid'),
    lastName: yup.string().required('Required field').matches(nameRegex, 'Last name is not valid'),
    phone: yup.number().typeError('Only numbers').required('Required field'),
    email: yup.string().email('Email is not valid').required('Required field'),
    cardNumber: yup.number().typeError('Only numbers').required('Required field'),
    street: yup.string().required('Required field').matches(nameRegex, 'Street is not valid'),
    houseNumber: yup.number().typeError('Only numbers').required('Required field'),
    date: yup.date().typeError('Date is not valid').min(defaultDate, 'Date is not valid'),
  });
  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        phone: '',
        email: '',
        cardNumber: '',
        street: '',
        houseNumber: '',
        date: defaultDate,
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationsShema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue }) => (
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
                    <TextField
                      helperText={errors.name}
                      error={Boolean(touched.name && errors.name)}
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="name"
                      fullWidth
                      id="name-order"
                      size="small"
                      label="Name"
                    />
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabel} item xs={1}>
                    <Typography>Last name</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      helperText={errors.lastName}
                      error={Boolean(touched.lastName && errors.lastName)}
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="lastName"
                      fullWidth
                      id="last-name-order"
                      size="small"
                      label="Last name"
                    />
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabel} item xs={1}>
                    <Typography>Phone</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <InputMask onBlur={handleBlur} mask="+7 999 999 99 99" value={values.phone} onChange={handleChange}>
                      <TextField
                        helperText={errors.phone}
                        error={Boolean(touched.phone && errors.phone)}
                        name="phone"
                        fullWidth
                        id="phone-order"
                        size="small"
                        label="Phone"
                      />
                    </InputMask>
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabel} item xs={1}>
                    <Typography>Email</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      helperText={errors.email}
                      error={Boolean(touched.email && errors.email)}
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="email"
                      fullWidth
                      id="email-order"
                      size="small"
                      label="Email"
                    />
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabel} item xs={1}>
                    <Typography>Card number</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <InputMask
                      onBlur={handleBlur}
                      mask="9999 9999 9999 9999"
                      value={values.cardNumber}
                      onChange={handleChange}
                    >
                      <TextField
                        helperText={errors.cardNumber}
                        error={Boolean(touched.cardNumber && errors.cardNumber)}
                        value={values.cardNumber}
                        name="cardNumber"
                        fullWidth
                        id="card-number-order"
                        size="small"
                        label="Card number"
                      />
                    </InputMask>
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabel} item xs={1}>
                    <Typography>Adress</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      helperText={errors.street}
                      error={Boolean(touched.street && errors.street)}
                      value={values.street}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="street"
                      id="street-order"
                      size="small"
                      label="Street"
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <TextField
                      helperText={errors.houseNumber}
                      error={Boolean(touched.houseNumber && errors.houseNumber)}
                      value={values.houseNumber}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="houseNumber"
                      id="house-number-order"
                      size="small"
                      label="House number"
                    />
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid className={classes.gridItemLabelDate} item xs={1}>
                    <Typography>Dete</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        helperText={errors.date}
                        name="date"
                        fullWidth
                        margin="normal"
                        id="date-order"
                        format="dd.MM.yyyy"
                        value={values.date}
                        onChange={(e) => setFieldValue('date', e)}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <CardActions>
            <Button
              onClick={() => handleSubmit()}
              disabled={!isValid && !dirty}
              color="primary"
              variant="contained"
              type="submit"
            >
              Buy $$$
            </Button>
          </CardActions>
        </>
      )}
    </Formik>
  );
};
export default Order;
