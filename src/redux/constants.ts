import { IBeerDTO } from 'Api/beer';

const initialBeer: IBeerDTO = {
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

export default initialBeer;
