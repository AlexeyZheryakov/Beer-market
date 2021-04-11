import { SOME_ACTION } from '../action-types';
import { IStore } from '../types';

export interface IOtherAction {
  type: string;
}

function otherReducer(state: IStore['other'] = '', action: IOtherAction) {
  if (action.type === SOME_ACTION) {
    return 'it is other reducer record...';
  }
  return state;
}

export default otherReducer;
