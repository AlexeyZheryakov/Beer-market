import React from 'react';
import { useParams } from 'react-router-dom';

import { List, CircularProgress, Typography, Box } from '@material-ui/core';

import { IStore } from 'redux/types';
import { getDetailsBeer } from 'redux/reducers/beerDetails/actions';
import { useSelector, useDispatch } from 'react-redux';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const detailsBeer: IStore['detailsBeer'] = useSelector<IStore, IStore['detailsBeer']>((state) => state.detailsBeer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getDetailsBeer(id));
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
        {detailsBeer.item.id} {detailsBeer.item.name}
        {detailsBeer.item.description} {detailsBeer.item.tagline}
        {detailsBeer.item.contributed_by} {detailsBeer.item.attenuation_level} {detailsBeer.item.first_brewed}
        <img alt="img" src={detailsBeer.item.image_url} />
      </List>
    </>
  );
};

export default Details;
