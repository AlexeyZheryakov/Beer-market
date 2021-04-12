import { Action } from 'redux';
import { IBeerDTO } from 'Api/beer';
import { AxiosError } from 'axios';

/**
 * Strict version of @see AnyAction from Redux
 */
export type AnyActionWithPayload<T> = Action & { payload: T };

export interface IOtherAction {
  type: string;
}

interface IBeerList {
  items: Array<IBeerDTO>;
  loading?: boolean;
  error?: AxiosError;
}

export interface IStore {
  beerList: IBeerList;
  other: string;
}
