import { IBeerDTO } from 'Api/beer';

export interface IStore {
  list: Array<IBeerDTO>;
  other: string;
}
