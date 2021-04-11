import { OTHER_ACTION_NAME } from '../action';
import { IStore, IOtherAction } from '../types';

function otherReducer(state: IStore['other'] = '', action: IOtherAction) {
  if (action.type === OTHER_ACTION_NAME) {
    return 'it is other reducer record...';
  }
  return state;
}

export default otherReducer;
