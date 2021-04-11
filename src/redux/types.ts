import { IBeerDTO } from 'Api/beer';

export interface IBeerListAction {
  type: string;
  payload: Array<IBeerDTO>;
}

export interface IOtherAction {
  type: string;
}

export interface IStore {
  list: Array<IBeerDTO>;
  other: string;
}
