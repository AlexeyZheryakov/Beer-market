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

interface IDetailsBeer extends IRemoteData {
  item: IBeerDTO;
}

export interface IStore {
  beerList: IBeerList;
  other: string;
  detailsBeer: IDetailsBeer;
}
