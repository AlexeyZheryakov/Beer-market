import React from 'react';
import { useParams, Link } from 'react-router-dom';
import routes from 'routes';
import CenteredTabs from 'pages/details/tabs';

import {
  Card,
  CardHeader,
  Divider,
  Breadcrumbs,
  CircularProgress,
  Typography,
  Box,
  CardActions,
  Button,
  TextField,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import { IStore, ICartBeer } from 'redux/types';
import { getBeerDetails } from 'redux/reducers/beerDetails/actions';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'pages/details/styles';
import { addBeerToCartAction, removeBeerFromCartAction } from 'redux/reducers/cart/actions';

const Details: React.FC = () => {
  const [quantity, setQuantity] = React.useState(1);
  const validValue = (value: number) => {
    if (value > 99) setQuantity(99);
    else if (value < 1) setQuantity(1);
    else setQuantity(value);
  };
  const cartBeerFromRedux: IStore['beerCart'] = useSelector<IStore, IStore['beerCart']>((state) => state.beerCart);
  const { id, category } = useParams<{ id: string; category: string }>();
  const beerDetails: IStore['beerDetails'] = useSelector<IStore, IStore['beerDetails']>((state) => state.beerDetails);
  const cartBeer: ICartBeer = { ...beerDetails.item, count: quantity };
  const dispatch = useDispatch();
  const handleAddToCartClick = () => dispatch(addBeerToCartAction(cartBeer));
  const handleRemoveFromCartClick = () => dispatch(removeBeerFromCartAction(cartBeer));
  const tabs = CenteredTabs(beerDetails.item);
  const classes = useStyles();
  React.useEffect(() => {
    dispatch(getBeerDetails(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {beerDetails.loading && (
        <Box className={classes.box} p={10}>
          <CircularProgress />
          <Typography>Loading...</Typography>
        </Box>
      )}
      {beerDetails.error && <Typography>Произошла ошибка</Typography>}
      {!beerDetails.loading && (
        <Box className={classes.root}>
          <Card>
            <CardHeader title={beerDetails.item.name} />
            <Divider />
            <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
              <Link className={classes.buttonLink} color="inherit" to={routes.main(category)}>
                Catalog
              </Link>
              <Typography color="textPrimary">{beerDetails.item.name}</Typography>
            </Breadcrumbs>
            <div className={classes.flex}>
              <img className={classes.img} src={beerDetails.item.image_url} alt="img" />
              <div className={classes.div}>
                {tabs}
                <CardActions className={classes.cardActions}>
                  <TextField
                    onChange={(e) => validValue(Number(e.target.value))}
                    inputProps={{ min: 1, max: 99 }}
                    type="number"
                    id="beer-details-count-input"
                    defaultValue="1"
                    variant="outlined"
                    size="small"
                  />
                  {!cartBeerFromRedux.selectedIds[beerDetails.item.id] && (
                    <Button
                      onClick={handleAddToCartClick}
                      variant="contained"
                      className={classes.button}
                      startIcon={<AddCircleOutlineIcon />}
                    >
                      Add To Card
                    </Button>
                  )}
                  {cartBeerFromRedux.selectedIds[beerDetails.item.id] && (
                    <Button
                      onClick={handleRemoveFromCartClick}
                      variant="contained"
                      className={classes.button}
                      startIcon={<RemoveCircleOutlineIcon />}
                    >
                      Remove From Cart
                    </Button>
                  )}
                  <Link className={classes.buttonLink} to={routes.cart(category)}>
                    <Button variant="contained" className={classes.button} startIcon={<ShoppingCartIcon />}>
                      Go To Cart
                    </Button>
                  </Link>
                </CardActions>
              </div>
            </div>
          </Card>
        </Box>
      )}
    </>
  );
};

export default Details;
