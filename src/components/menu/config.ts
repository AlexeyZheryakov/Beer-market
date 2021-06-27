import { IBeerStrengthСonfig, IBitternessOfBeerСonfig, IColoursConfig } from 'components/menu/types';

export const beerStrengthСonfig: IBeerStrengthСonfig = {
  lightBeer: { label: 'Light Beer', query: { abv_lt: 3 } },
  regularBeer: { label: 'Regular Beer', query: { abv_gt: 3, abv_lt: 6 } },
  strongBeer: { label: 'Strong Beer', query: { abv_gt: 6, abv_lt: 20 } },
  veryStrongBeer: { label: 'Very Strong Beer', query: { abv_gt: 20 } },
};

export const bitternessOfBeerСonfig: IBitternessOfBeerСonfig = {
  americanLightLager: { label: 'American Light Lager', query: { ibu_gt: 8, ibu_lt: 12 } },
  scottishAle: { label: 'Scottish Ale', query: { ibu_gt: 10, ibu_lt: 20 } },
  porter: { label: 'Porter', query: { ibu_gt: 20, ibu_lt: 40 } },
  englishBitter: { label: 'English Bitter', query: { ibu_gt: 30, ibu_lt: 40 } },
  stout: { label: 'Stout', query: { ibu_gt: 30, ibu_lt: 50 } },
  indiaPaleAle: { label: 'India Pale Ale', query: { ibu_gt: 60, ibu_lt: 80 } },
  barleywine: { label: 'Barleywine', query: { ibu_gt: 70, ibu_lt: 100 } },
  doubleOrImperial: { label: 'Double Or Imperial', query: { ibu_gt: 80, ibu_lt: 100 } },
};

export const coloursConfig: IColoursConfig = {
  pale: { label: 'Pale', query: { ebc_lt: 5 } },
  lightBlond: { label: 'Light Blond', query: { ebc_gt: 5, ebc_lt: 7 } },
  blond: { label: 'Blond', query: { ebc_gt: 7, ebc_lt: 11 } },
  yellow: { label: 'Yellow', query: { ebc_gt: 11, ebc_lt: 15 } },
  gold: { label: 'Gold', query: { ebc_gt: 15, ebc_lt: 20 } },
  amber: { label: 'Amber', query: { ebc_gt: 20, ebc_lt: 38 } },
  copper: { label: 'Copper', query: { ebc_gt: 38, ebc_lt: 46 } },
  darkCopper: { label: 'Dark Copper', query: { ebc_gt: 46, ebc_lt: 68 } },
  brown: { label: 'Brown', query: { ebc_gt: 68, ebc_lt: 78 } },
  darkBrown: { label: 'Dark Brown', query: { ebc_gt: 78 } },
};
