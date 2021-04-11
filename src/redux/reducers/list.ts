import { IBeerDTO } from 'Api/beer';
import { SET_BEER_LIST_ACTION } from '../action-types';
import { IStore } from '../types';

export interface IBeerListAction {
  type: string;
  payload: Array<IBeerDTO>;
}

function beerListReducer(state: IStore['list'] = [], action: IBeerListAction) {
  if (action.type === SET_BEER_LIST_ACTION) {
    return action.payload;
  }
  return state;
}

export default beerListReducer;
