import { combineReducers } from 'redux';
import beerListReducer from './beerList/reducer';
import detailsBeerReducer from './beerDetails/reducer';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  detailsBeer: detailsBeerReducer,
});

export default rootReducer;
