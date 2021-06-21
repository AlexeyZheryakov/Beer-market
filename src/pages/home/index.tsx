import React from 'react';
import Button from '@material-ui/core/Button';
import routes from 'routes';
import { Link, useParams } from 'react-router-dom';
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
import { IBeerDTO } from 'Api/beer';
import { getBeerList } from 'redux/reducers/beerList/actions';
import { incrementCountBeerToCartAction } from 'redux/reducers/cart/actions';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'pages/home/styles';
import config from 'components/menu/config';
import { IConfig } from 'components/menu/types';
import constants from 'components/menu/constants';

const Home: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const configuration: IConfig = config(search);
  const { category } = useParams<{ category: string }>();
  const classes = useStyles();
  const beerList: IStore['beerList'] = useSelector<IStore, IStore['beerList']>((state) => state.beerList);
  const dispatch = useDispatch();
  const handleIncrementCountBeer = (cartBeer: IBeerDTO) => () => dispatch(incrementCountBeerToCartAction(cartBeer));
  React.useEffect(() => {
    dispatch(getBeerList(configuration[category]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useParams()]);
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
          <div className={classes.form}>
            <TextField
              onChange={(e) => setSearch(e.target.value)}
              className={classes.textField}
              color="secondary"
              id="search"
              label="Please input text"
              variant="outlined"
              size="small"
            />
            <Link className={classes.buttonLink} to={routes.main(constants.search)}>
              <Button color="primary" variant="contained">
                Search
              </Button>
            </Link>
          </div>
          <Grid container spacing={2} className={classes.gridContainer}>
            {beerList.items.map((beer) => (
              <Grid item key={beer.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader className={classes.cardHeder} title={beer.name} />
                  <CardContent>
                    <img className={classes.img} src={beer.image_url} alt="img" />
                    <Typography>{beer.name}</Typography>
                    <Typography className={classes.description}>{beer.description}</Typography>
                  </CardContent>
                  <CardActions className={classes.cardActions}>
                    <IconButton>
                      <StarBorderIcon className={classes.icons} />
                    </IconButton>
                    <IconButton onClick={handleIncrementCountBeer(beer)}>
                      <AddShoppingCartIcon className={classes.icons} />
                    </IconButton>
                    <Link to={routes.cart(category)}>
                      <IconButton>
                        <ShoppingCartIcon className={classes.icons} />
                      </IconButton>
                    </Link>
                    <Link className={classes.buttonLink} to={routes.details(String(beer.id), category)}>
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
