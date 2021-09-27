import React from 'react';
import Button from '@material-ui/core/Button';
import routes from 'routes';
import { Link, useParams } from 'react-router-dom';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
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
import { getBeerList, getNewPageBeerList } from 'redux/reducers/beerList/actions';
import { incrementCountBeerToCartAction } from 'redux/reducers/cart/actions';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'pages/home/styles';
import { beerStrengthСonfig, bitternessOfBeerСonfig, coloursConfig } from 'components/menu/config';
import { IBeerStrengthСonfig, IBitternessOfBeerСonfig, IColoursConfig } from 'components/menu/types';

const Home: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const { category } = useParams<{ category: string }>();
  const classes = useStyles();
  const beerList: IStore['beerList'] = useSelector<IStore, IStore['beerList']>((state) => state.beerList);
  const dispatch = useDispatch();
  const handleIncrementCountBeer = (cartBeer: IBeerDTO) => () => dispatch(incrementCountBeerToCartAction(cartBeer));
  const currentGroup =
    beerStrengthСonfig[category as keyof IBeerStrengthСonfig] ||
    bitternessOfBeerСonfig[category as keyof IBitternessOfBeerСonfig] ||
    coloursConfig[category as keyof IColoursConfig];
  useBottomScrollListener(() => {
    dispatch(
      getNewPageBeerList(
        currentGroup
          ? Object.fromEntries([...Object.entries(currentGroup.query), ['page', beerList.nextPageNumber]])
          : { beer_name: category, page: beerList.nextPageNumber }
      )
    );
  });
  React.useEffect(() => {
    dispatch(getBeerList(currentGroup ? currentGroup.query : { beer_name: category }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <>
      {beerList.loading && (
        <Box className={classes.box} p={10}>
          <CircularProgress />
          <Typography>Loading...</Typography>
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
              id="search-page-home"
              label="Please input text"
              variant="outlined"
              size="small"
            />
            <Link className={classes.buttonLink} to={routes.main(search)}>
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
