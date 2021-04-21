import { IBeerDTO } from 'Api/beer';
import {
  SET_BEER_LIST_ACTION_NAME,
  START_GETTING_BEER_LIST_ACTION_NAME,
  ERROR_GETTING_BEER_LIST_ACTION_NAME,
} from '../action';
import { IStore, AnyActionWithPayload } from '../types';

interface IBeerListPayload {
  list: IBeerDTO;
}

const itemBeer = {
  id: 0,
  name: '',
  tagline: '',
  abv: 0,
  attenuation_level: 0,
  boil_volume: {
    value: 0,
    unit: '',
  },
  brewers_tips: '',
  contributed_by: '',
  description: '',
  ebc: 0,
  first_brewed: '',
  food_pairing: [],
  ibu: 0,
  image_url: '',
  ph: 0,
  srm: 0,
  target_fg: 0,
  target_og: 0,
  volume: {
    value: 0,
    unit: '',
  },
  method: {
    fermentation: {
      temp: {
        value: 0,
        unit: '',
      },
    },
    mash_temp: [],
    twist: '',
  },
  ingredients: {
    malt: [],
    hops: [],
    yeast: '',
  },
};

function detailsBeerReducer(
  state: IStore['detailsBeer'] = { item: itemBeer },
  action: AnyActionWithPayload<IBeerListPayload>
) {
  switch (action.type) {
    // если получили данные
    case SET_BEER_LIST_ACTION_NAME:
      return { item: action.payload.list, loading: false };
    // если начали получать данные
    case START_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, loading: true };
    // если вместо данных получили ошибку
    case ERROR_GETTING_BEER_LIST_ACTION_NAME:
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}

export default detailsBeerReducer;
