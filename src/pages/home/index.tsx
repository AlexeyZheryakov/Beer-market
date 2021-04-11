import React from 'react';

import { List, ListItem } from '@material-ui/core';

import { IStore } from 'redux/types';
import { SET_BEER_LIST_ACTION } from 'redux/action-types';
import { IBeerListAction } from 'redux/reducers/list';
import { connect, ConnectedProps } from 'react-redux';
import Api from 'Api/beer';

const mapState = (state: IStore) => ({
  list: state.list,
});

const mapDispatch = {
  setList: (list: IBeerListAction['payload']): IBeerListAction => ({ type: SET_BEER_LIST_ACTION, payload: list }),
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

const Home: React.FC<PropsFromRedux> = ({ list, setList }) => {
  React.useEffect(() => {
    Api.getBeer().then((response) => {
      const { data } = response;
      setList(data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <List>
      {list.map((beer) => (
        <ListItem key={beer.id}>
          {beer.name} {beer.id}
        </ListItem>
      ))}
    </List>
  );
};

// функция высшего порядка которая подключает компонент к redux store
export default connector(Home);
