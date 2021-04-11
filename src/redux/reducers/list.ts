import { SET_BEER_LIST_ACTION_NAME } from '../action';
import { IStore, IBeerListAction } from '../types';

function beerListReducer(state: IStore['list'] = [], action: IBeerListAction) {
  if (action.type === SET_BEER_LIST_ACTION_NAME) {
    return action.payload;
  }
  return state;
}

export default beerListReducer;
