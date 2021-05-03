import { IBeerDTO } from 'Api/beer';
import {
  SET_BEER_DETAILS_ACTION_NAME,
  START_GETTING_BEER_DETAILS_ACTION_NAME,
  ERROR_GETTING_BEER_DETAILS_ACTION_NAME,
} from 'redux/reducers/beerDetails/actions';
import { IStore, AnyActionWithPayload } from 'redux/types';

import itemBeer from 'redux/constants';

interface IBeerDetailsPayload {
  details: IBeerDTO;
}

function beerDetailsReducer(
  state: IStore['beerDetails'] = { item: itemBeer },
  action: AnyActionWithPayload<IBeerDetailsPayload>
) {
  switch (action.type) {
    // если получили данные
    case SET_BEER_DETAILS_ACTION_NAME:
      return { item: action.payload.details, loading: false };
    // если начали получать данные
    case START_GETTING_BEER_DETAILS_ACTION_NAME:
      return { ...state, loading: true };
    // если вместо данных получили ошибку
    case ERROR_GETTING_BEER_DETAILS_ACTION_NAME:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}

export default beerDetailsReducer;
