import { Action } from 'redux';
import { IBeerDTO } from 'Api/beer';
import { AxiosError } from 'axios';

/**
 * Strict version of @see AnyAction from Redux
 */
export type AnyActionWithPayload<T> = Action & { payload: T };

interface IRemoteData {
  loading?: boolean;
  error?: AxiosError;
}
interface IBeerList extends IRemoteData {
  items: Array<IBeerDTO>;
}

interface IBeerDetails extends IRemoteData {
  item: IBeerDTO;
}

export interface ICartBeer extends IBeerDTO {
  count: number;
}

interface ICartReducer {
  items: Array<ICartBeer>;
}

export interface IStore {
  beerList: IBeerList;
  beerDetails: IBeerDetails;
  beerCart: ICartReducer;
}
