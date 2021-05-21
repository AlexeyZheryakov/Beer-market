import React from 'react';

import Button from '@material-ui/core/Button';
import routes from 'routes';
import { Link } from 'react-router-dom';

import {
  CircularProgress,
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { IStore } from 'redux/types';
import { getBeerList } from 'redux/reducers/beerList/actions';
import { useSelector, useDispatch } from 'react-redux';
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
    <>
      {beerList.loading && (
        <Box p={10}>
          <CircularProgress />
        </Box>
      )}
      {beerList.error && <Typography>Произошла ошибка</Typography>}
      {!beerList.loading && (
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
          <Grid container spacing={2} className={classes.gridContainer}>
            {beerList.items.map((beer) => (
              <Grid item key={beer.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader title={beer.name} />
                  <CardContent>
                    <img className={classes.img} src={beer.image_url} alt="img" />
                    <Typography>{beer.name}</Typography>
                    <Typography className={classes.description}>{beer.description}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <IconButton>
                      <StarBorderIcon className={classes.icons} />
                    </IconButton>
                    <IconButton>
                      <AddShoppingCartIcon className={classes.icons} />
                    </IconButton>
                    <Link to={routes.cart()}>
                      <IconButton>
                        <ShoppingCartIcon className={classes.icons} />
                      </IconButton>
                    </Link>
                    <Link className={classes.buttonLink} to={routes.details(String(beer.id))}>
                      <Button variant="outlined">Details...</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Home;
