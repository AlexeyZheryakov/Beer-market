import { combineReducers } from 'redux';
import beerListReducer from './list';
import otherReducer from './other';

const rootReducer = combineReducers({
  beerList: beerListReducer,
  other: otherReducer,
});

export default rootReducer;
