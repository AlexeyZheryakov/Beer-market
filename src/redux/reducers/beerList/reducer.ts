import { IBeerDTO } from 'Api/beer';
import {
  SET_BEER_LIST_ACTION_NAME,
  START_GETTING_BEER_LIST_ACTION_NAME,
  ERROR_GETTING_BEER_LIST_ACTION_NAME,
  ADD_BEER_LIST_ACTION_NAME,
} from 'redux/reducers/beerList/actions';
import { IStore, AnyActionWithPayload } from 'redux/types';

const PAGE_LIMIT = 25;

interface IBeerListPayload {
  list: Array<IBeerDTO>;
}

function beerListReducer(
  state: IStore['beerList'] = { items: [], nextPageNumber: 0, lastBeerListLength: 0 },
  action: AnyActionWithPayload<IBeerListPayload>
) {
  switch (action.type) {
    // если получили данные
    case SET_BEER_LIST_ACTION_NAME:
      return { items: action.payload.list, loading: false, nextPageNumber: 2, lastBeerListLength: 0 };
    // если начали получать данные
    case START_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, loading: true };
    // если вместо данных получили ошибку
    case ERROR_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, error: true, loading: false };
    case ADD_BEER_LIST_ACTION_NAME: {
      let beerListLength = state.lastBeerListLength;
      let newPageNumber = state.nextPageNumber;
      const itemss = state.items;
      if (action.payload.list.length > PAGE_LIMIT - 1) {
        newPageNumber = state.nextPageNumber + 1;
      } else {
        beerListLength = action.payload.list.length;
        itemss.splice(state.items.length - state.lastBeerListLength, state.lastBeerListLength);
      }
      return {
        items: [...itemss, ...action.payload.list],
        loading: false,
        nextPageNumber: newPageNumber,
        lastBeerListLength: beerListLength,
      };
    }
    default:
      return state;
  }
}

export default beerListReducer;
