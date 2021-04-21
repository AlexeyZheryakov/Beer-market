import { combineReducers } from 'redux';
import beerListReducer from './list';
import detailsBeerReducer from './details';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  detailsBeer: detailsBeerReducer,
});

export default rootReducer;
