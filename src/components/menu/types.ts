export interface IConfig {
  beerStrength: ICategory;
  lightBeer: ICategoryWithQuery;
  regularBeer: ICategoryWithQuery;
  strongBeer: ICategoryWithQuery;
  veryStrongBeer: ICategoryWithQuery;
  bitternessOfBeer: ICategory;
  americanLightLager: ICategoryWithQuery
  scottishAle: ICategoryWithQuery;
  porter: ICategoryWithQuery;
  englishBitter: ICategoryWithQuery;
  stout: ICategoryWithQuery;
  indiaPaleAle: ICategoryWithQuery;
  barleywine: ICategoryWithQuery;
  doubleOrImperial: ICategoryWithQuery;
  colours: ICategory;
  pale: ICategoryWithQuery;
  lightBlond: ICategoryWithQuery;
  blond: ICategoryWithQuery;
  yellow: ICategoryWithQuery;
  gold: ICategoryWithQuery;
  amber: ICategoryWithQuery;
  copper: ICategoryWithQuery;
  darkCopper: ICategoryWithQuery;
  brown: ICategoryWithQuery;
  darkBrown: ICategoryWithQuery;
}

interface ICategory {
  disabled: boolean,
  label: string,
}
interface ICategoryWithQuery extends ICategory {
  query : IQuery;
}

export default interface IQuery {
  [key: string]: number;
}
