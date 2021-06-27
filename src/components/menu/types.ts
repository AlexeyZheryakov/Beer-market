import { TBeerListParams } from 'Api/beer';

export interface IBeerStrengthСonfig {
  lightBeer: ICategory;
  regularBeer: ICategory;
  strongBeer: ICategory;
  veryStrongBeer: ICategory;
}

export interface IBitternessOfBeerСonfig {
  americanLightLager: ICategory;
  scottishAle: ICategory;
  porter: ICategory;
  englishBitter: ICategory;
  stout: ICategory;
  indiaPaleAle: ICategory;
  barleywine: ICategory;
  doubleOrImperial: ICategory;
}

export interface IColoursConfig {
  pale: ICategory;
  lightBlond: ICategory;
  blond: ICategory;
  yellow: ICategory;
  gold: ICategory;
  amber: ICategory;
  copper: ICategory;
  darkCopper: ICategory;
  brown: ICategory;
  darkBrown: ICategory;
}

export default interface ICategory {
  label: string;
  query: TBeerListParams;
}
