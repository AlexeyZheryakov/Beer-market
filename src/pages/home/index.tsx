import React from 'react';

import Button from '@material-ui/core/Button';
import routes from 'routes';
import { Link } from 'react-router-dom';

import { List, ListItem, CircularProgress, Typography, Box } from '@material-ui/core';

import { IStore } from 'redux/types';
import { getBeerList } from 'redux/reducers/beerList/actions';
import { useSelector, useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const beerList: IStore['beerList'] = useSelector<IStore, IStore['beerList']>((state) => state.beerList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBeerList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {beerList.loading && (
        <Box p={4}>
          <CircularProgress />
        </Box>
      )}
      {beerList.error && <Typography>Произошла ошибка</Typography>}
      <List>
        {beerList.items.map((beer) => (
          <ListItem key={beer.id}>
            {beer.name} {beer.id}
            <Link to={routes.details(String(beer.id))}>
              <Button variant="contained">Details</Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Home;
