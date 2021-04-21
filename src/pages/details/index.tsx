import React from 'react';
import { useParams } from 'react-router-dom';

import { List, ListItem, CircularProgress, Typography, Box } from '@material-ui/core';

import { IStore } from 'redux/types';
import { getDetailsBeerList } from 'redux/action';
import { useSelector, useDispatch } from 'react-redux';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const detailsBeer: IStore['detailsBeer'] = useSelector<IStore, IStore['detailsBeer']>((state) => state.detailsBeer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDetailsBeerList(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {detailsBeer.loading && (
        <Box p={4}>
          <CircularProgress />
        </Box>
      )}
      {detailsBeer.error && <Typography>Произошла ошибка</Typography>}
      <List>
        <ListItem key={detailsBeer.item.id}>
          {detailsBeer.item.id} {detailsBeer.item.name} {detailsBeer.item.id} {detailsBeer.item.food_pairing}
          <img alt="img" src={detailsBeer.item.image_url} />
        </ListItem>
      </List>
    </>
  );
};

export default Details;
