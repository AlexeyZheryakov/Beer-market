import { createStore } from 'redux';

import rootReducer from './reducers';
import { SOME_ACTION } from './action-types';

const store = createStore(rootReducer);

store.dispatch({ type: SOME_ACTION });

export default store;
