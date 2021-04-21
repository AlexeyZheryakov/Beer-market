import { Action } from 'redux';
import { IBeerDTO } from 'Api/beer';
import { AxiosError } from 'axios';

/**
 * Strict version of @see AnyAction from Redux
 */
export type AnyActionWithPayload<T> = Action & { payload: T };

interface IBeerList {
  items: Array<IBeerDTO>;
  loading?: boolean;
  error?: AxiosError;
}

interface IDetailsBeer {
  item: IBeerDTO;
  loading?: boolean;
  error?: AxiosError;
}

export interface IStore {
  beerList: IBeerList;
  other: string;
  detailsBeer: IDetailsBeer;
}
