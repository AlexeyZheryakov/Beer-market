import React from 'react';

import Button from '@material-ui/core/Button';
import routes from 'routes';
import { Link } from 'react-router-dom';

import { CircularProgress, Typography, Box, Grid, Card, CardHeader, CardContent, CardActions } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { IStore } from 'redux/types';
import { getBeerList } from 'redux/reducers/beerList/actions';
import { useSelector, useDispatch } from 'react-redux';
import { theme } from 'App';
import useStyles from 'pages/home/styles';

const Home: React.FC = () => {
  const classes = useStyles();
  const beerList: IStore['beerList'] = useSelector<IStore, IStore['beerList']>((state) => state.beerList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBeerList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} p={1}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            className={classes.textField}
            color="secondary"
            id="outlined-basic"
            label="Please input text"
            variant="outlined"
            size="small"
          />
          <Button color="primary" variant="contained">
            Search
          </Button>
        </form>
        {beerList.loading && (
          <Box p={4}>
            <CircularProgress />
          </Box>
        )}
        {beerList.error && <Typography>Произошла ошибка</Typography>}
        <Grid container spacing={2} className={classes.gridContainer}>
          {beerList.items.map((beer) => (
            <Grid item key={beer.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader title={beer.name} />
                <CardContent>
                  <img className={classes.img} src={beer.image_url} alt="img" />
                  <Typography>{beer.name}</Typography>
                  <Typography>{beer.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <StarBorderIcon className={classes.icons} />
                  <AddShoppingCartIcon className={classes.icons} />
                  <ShoppingCartIcon className={classes.icons} />
                  <Link className={classes.buttonLink} to={routes.details(String(beer.id))}>
                    <Button variant="outlined">Details...</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
