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
  ButtonGroup,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { IStore } from 'redux/types';
import { getBeerDetails } from 'redux/reducers/beerDetails/actions';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from 'pages/details/styles';

const Details: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const beerDetails: IStore['beerDetails'] = useSelector<IStore, IStore['beerDetails']>((state) => state.beerDetails);
  const dispatch = useDispatch();
  const tabs = CenteredTabs(beerDetails.item);
  React.useEffect(() => {
    dispatch(getBeerDetails(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {beerDetails.loading && (
        <Box p={10}>
          <CircularProgress />
        </Box>
      )}
      {beerDetails.error && <Typography>Произошла ошибка</Typography>}
      {!beerDetails.loading && (
        <Box className={classes.root}>
          <Card>
            <CardHeader title={beerDetails.item.name} />
            <Divider />
            <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
              <Link className={classes.buttonLink} color="inherit" to={routes.main()}>
                Catalog
              </Link>
              <Typography color="textPrimary">{beerDetails.item.name}</Typography>
            </Breadcrumbs>
            <div className={classes.flex}>
              <img className={classes.img} src={beerDetails.item.image_url} alt="img" />
              <div className={classes.div}>
                {tabs}
                <CardActions className={classes.cardActions}>
                  <ButtonGroup disableElevation variant="contained">
                    <Button className={classes.button} variant="outlined">
                      <AddIcon />
                    </Button>
                    <Button className={classes.button} variant="outlined">
                      <RemoveIcon />
                    </Button>
                  </ButtonGroup>
                  <Typography>6</Typography>
                  <Button variant="contained" className={classes.button} startIcon={<AddCircleOutlineIcon />}>
                    Add To Card
                  </Button>
                  <Button variant="contained" className={classes.button} startIcon={<ShoppingCartIcon />}>
                    Go To Cart
                  </Button>
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
