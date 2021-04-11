import axios from 'axios';

const BASE_URL = '/api/v2';

interface IVolume {
  value: number;
  unit: string;
}

export interface IBeerDTO {
  id: number;
  name: string;
  tagline: string;
  abv: number;
  attenuation_level: number;
  boil_volume: IVolume;
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
  volume: IVolume;
}

const Api = {
  // eslint-disable-next-line no-console
  getBeer: () => axios.get<Array<IBeerDTO>>(`${BASE_URL}/beers`),
};

export default Api;
