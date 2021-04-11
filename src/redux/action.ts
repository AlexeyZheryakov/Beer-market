import { IBeerListAction } from './types';

export const SET_BEER_LIST_ACTION_NAME = 'SET_BEER_LIST_ACTION';
export const OTHER_ACTION_NAME = 'SOME_ACTION_NAME';

export const setBeerListAction = (list: IBeerListAction['payload']): IBeerListAction => ({
  type: SET_BEER_LIST_ACTION_NAME,
  payload: list,
});

export const otherAction = () => ({ type: OTHER_ACTION_NAME });
