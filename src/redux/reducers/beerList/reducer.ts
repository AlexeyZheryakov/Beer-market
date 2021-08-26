import { IBeerDTO } from 'Api/beer';
import {
  SET_BEER_LIST_ACTION_NAME,
  START_GETTING_BEER_LIST_ACTION_NAME,
  ERROR_GETTING_BEER_LIST_ACTION_NAME,
  ADD_BEER_LIST_ACTION_NAME,
} from 'redux/reducers/beerList/actions';
import { IStore, AnyActionWithPayload } from 'redux/types';

interface IBeerListPayload {
  list: Array<IBeerDTO>;
}

function beerListReducer(state: IStore['beerList'] = { items: [] }, action: AnyActionWithPayload<IBeerListPayload>) {
  switch (action.type) {
    // если получили данные
    case SET_BEER_LIST_ACTION_NAME:
      return { items: action.payload.list, loading: false };
    // если начали получать данные
    case START_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, loading: true };
    // если вместо данных получили ошибку
    case ERROR_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, error: true, loading: false };
    case ADD_BEER_LIST_ACTION_NAME:
      return { items: [...state.items, ...action.payload.list], loading: false };

    default:
      return state;
  }
}

export default beerListReducer;
