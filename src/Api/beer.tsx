import axios from 'axios';
import ICategory from 'components/menu/types';

const BASE_URL = `${process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BEER_API_URL : '/api/'}v2`;

interface IUnitValue {
  value: number;
  unit: string;
}

interface IMethod {
  fermentation: IFermentation;
  mash_temp: Array<IMashTempItem>;
  twist: string | null;
}

interface IFermentation {
  temp: IUnitValue;
}

interface IMashTempItem {
  duration: number;
  temp: IUnitValue;
}

interface IIngredients {
  hops: Array<IHopsItem>;
  malt: Array<IMaltItem>;
  yeast: string;
}

interface IMaltItem {
  amount: IUnitValue;
  name: string;
}

interface IHopsItem {
  add: string;
  amount: IUnitValue;
  attribute: string;
  name: string;
}

export interface IBeerDTO {
  id: number;
  name: string;
  tagline: string;
  abv: number;
  attenuation_level: number;
  boil_volume: IUnitValue;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number | null;
  first_brewed: string;
  food_pairing: string[];
  ibu: number | null;
  image_url: string;
  ph: number | null;
  srm: number | null;
  target_fg: number;
  target_og: number;
  volume: IUnitValue;
  method: IMethod;
  ingredients: IIngredients;
}

const Api = {
  getBeer: (params: ICategory = {}) => axios.get<Array<IBeerDTO>>(`${BASE_URL}/beers`, { params }),
  getBeerDetails: (id: string) => axios.get<Array<IBeerDTO>>(`${BASE_URL}/beers/${id}`),
};

export default Api;
