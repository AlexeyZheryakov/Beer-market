import { combineReducers } from 'redux';
import beerListReducer from './beerList/reducer';
import beerDetailsReducer from './beerDetails/reducer';
import beerCartReducer from './cart/reducer';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  beerDetails: beerDetailsReducer,
  beerCart: beerCartReducer,
});

export default rootReducer;
