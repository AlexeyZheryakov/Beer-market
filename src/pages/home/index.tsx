import React from 'react';

import { List, ListItem, CircularProgress, Typography, Box } from '@material-ui/core';

import { IStore } from 'redux/types';
import { getBeerList } from 'redux/action';
import { connect, ConnectedProps } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

const mapState = (state: IStore) => ({
  beerList: state.beerList,
});

const mapDispatch = (dispatch: ThunkDispatch<IStore, void, Action>) => ({
  getList: () => dispatch(getBeerList()),
});

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: React.FC<PropsFromRedux> = ({ beerList, getList }) => {
  React.useEffect(() => {
    getList();
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
          </ListItem>
        ))}
      </List>
    </>
  );
};

// функция высшего порядка которая подключает компонент к redux store
export default connector(Home);
