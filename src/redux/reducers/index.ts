import { combineReducers } from 'redux';
import beerListReducer from './list';
import otherReducer from './other';

const rootReducer = combineReducers({
  list: beerListReducer,
  other: otherReducer,
});

export default rootReducer;
