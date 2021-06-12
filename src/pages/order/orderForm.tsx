import React from 'react';
import InputMask from 'react-input-mask';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from 'pages/order/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import { FormikProps } from 'formik';

interface Values {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  cardNumber: string;
  street: string;
  houseNumber: string;
  date: Date;
}

export default function OrderForm(props: FormikProps<Values>) {
  const { values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, setFieldValue } = props;
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Name</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              helperText={touched.name && errors.name}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Last name</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              helperText={touched.lastName && errors.lastName}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Phone</Typography>
          </Grid>
          <Grid item xs={3}>
            <InputMask onBlur={handleBlur} mask="+7 999 999 99 99" value={values.phone} onChange={handleChange}>
              <TextField
                helperText={touched.phone && errors.phone}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextField
              helperText={touched.email && errors.email}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Card number</Typography>
          </Grid>
          <Grid item xs={3}>
            <InputMask onBlur={handleBlur} mask="9999 9999 9999 9999" value={values.cardNumber} onChange={handleChange}>
              <TextField
                helperText={touched.cardNumber && errors.cardNumber}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabel} item xs={1}>
            <Typography>Adress</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              helperText={touched.street && errors.street}
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
              helperText={touched.houseNumber && errors.houseNumber}
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
        <Grid className={classes.gridHeight} container item>
          <Grid className={classes.gridItemLabelDate} item xs={1}>
            <Typography>Date</Typography>
          </Grid>
          <Grid item xs={3}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                error={Boolean(errors.date)}
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
      <Button disabled={!isValid && !dirty} color="primary" variant="contained" type="submit">
        Buy $$$
      </Button>
    </form>
  );
}
