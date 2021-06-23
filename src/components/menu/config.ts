import { IConfig } from 'components/menu/types';

const config: any = {
  beerStrength: {
    disabled: true,
    label: 'Beer Strength',
  },
  lightBeer: {
    disabled: false,
    label: 'Light Beer',
    query: {
      abv_lt: 3,
    },
  },
  regularBeer: {
    disabled: false,
    label: 'Regular Beer',
    query: {
      abv_gt: 3,
      abv_lt: 6,
    },
  },
  strongBeer: {
    disabled: false,
    label: 'Strong Beer',
    query: {
      abv_gt: 6,
      abv_lt: 20,
    },
  },
  veryStrongBeer: {
    disabled: false,
    label: 'Very Strong Beer',
    query: {
      abv_gt: 20,
    },
  },
  bitternessOfBeer: {
    disabled: true,
    label: 'Bitterness of beer',
  },
  americanLightLager: {
    disabled: false,
    label: 'American Light Lager',
    query: {
      ibu_gt: 8,
      ibu_lt: 12,
    },
  },
  scottishAle: {
    disabled: false,
    label: 'Scottish Ale',
    query: {
      ibu_gt: 10,
      ibu_lt: 20,
    },
  },
  porter: {
    disabled: false,
    label: 'Porter',
    query: {
      ibu_gt: 20,
      ibu_lt: 40,
    },
  },
  englishBitter: {
    disabled: false,
    label: 'English Bitter',
    query: {
      ibu_gt: 30,
      ibu_lt: 40,
    },
  },
  stout: {
    disabled: false,
    label: 'Stout',
    query: {
      ibu_gt: 30,
      ibu_lt: 50,
    },
  },
  indiaPaleAle: {
    disabled: false,
    label: 'India Pale Ale',
    query: {
      ibu_gt: 60,
      ibu_lt: 80,
    },
  },
  barleywine: {
    disabled: false,
    label: 'Barleywine',
    query: {
      ibu_gt: 70,
      ibu_lt: 100,
    },
  },
  doubleOrImperial: {
    disabled: false,
    label: 'Double Or Imperial',
    query: {
      ibu_gt: 80,
      ibu_lt: 100,
    },
  },
  colours: {
    disabled: true,
    label: 'Colours',
  },
  pale: {
    disabled: false,
    label: 'Pale',
    query: {
      ebc_lt: 5,
    },
  },
  lightBlond: {
    disabled: false,
    label: 'Light Blond',
    query: {
      ebc_gt: 5,
      ebc_lt: 7,
    },
  },
  blond: {
    disabled: false,
    label: 'Blond',
    query: {
      ebc_gt: 7,
      ebc_lt: 11,
    },
  },
  yellow: {
    disabled: false,
    label: 'Yellow',
    query: {
      ebc_gt: 11,
      ebc_lt: 15,
    },
  },
  gold: {
    disabled: false,
    label: 'Gold',
    query: {
      ebc_gt: 15,
      ebc_lt: 20,
    },
  },
  amber: {
    disabled: false,
    label: 'Amber',
    query: {
      ebc_gt: 20,
      ebc_lt: 38,
    },
  },
  copper: {
    disabled: false,
    label: 'Copper',
    query: {
      ebc_gt: 38,
      ebc_lt: 46,
    },
  },
  darkCopper: {
    disabled: false,
    label: 'Dark Copper',
    query: {
      ebc_gt: 46,
      ebc_lt: 68,
    },
  },
  brown: {
    disabled: false,
    label: 'Brown',
    query: {
      ebc_gt: 68,
      ebc_lt: 78,
    },
  },
  darkBrown: {
    disabled: false,
    label: 'Dark Brown',
    query: {
      ebc_gt: 78,
    },
  },
};

export default config;
