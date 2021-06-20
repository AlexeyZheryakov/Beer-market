import { IConfig } from 'components/menu/types';

const config: IConfig = {
  lightBeer: {
    abv_lt: 3,
  },
  regularBeer: {
    abv_gt: 3,
    abv_lt: 6,
  },
  strongBeer: {
    abv_gt: 6,
    abv_lt: 20,
  },
  veryStrongBeer: {
    abv_gt: 20,
  },
};

export default config;
