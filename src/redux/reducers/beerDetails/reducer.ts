import { IBeerDTO } from 'Api/beer';
import {
  SET_DETAILS_BEER_ACTION_NAME,
  START_GETTING_DETAILS_BEER_ACTION_NAME,
  ERROR_GETTING_DETAILS_BEER_ACTION_NAME,
} from 'redux/reducers/beerDetails/actions';
import { IStore, AnyActionWithPayload } from 'redux/types';

import itemBeer from 'redux/constants';

interface IDetailsBeerPayload {
  details: IBeerDTO;
}

function detailsBeerReducer(
  state: IStore['detailsBeer'] = { item: itemBeer },
  action: AnyActionWithPayload<IDetailsBeerPayload>
) {
  switch (action.type) {
    // если получили данные
    case SET_DETAILS_BEER_ACTION_NAME:
      return { item: action.payload.details, loading: false };
    // если начали получать данные
    case START_GETTING_DETAILS_BEER_ACTION_NAME:
      return { ...state, loading: true };
    // если вместо данных получили ошибку
    case ERROR_GETTING_DETAILS_BEER_ACTION_NAME:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}

export default detailsBeerReducer;
