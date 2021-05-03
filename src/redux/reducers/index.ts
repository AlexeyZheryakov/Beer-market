import { combineReducers } from 'redux';
import beerListReducer from './beerList/reducer';
import beerDetailsReducer from './beerDetails/reducer';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  beerDetails: beerDetailsReducer,
});

export default rootReducer;
