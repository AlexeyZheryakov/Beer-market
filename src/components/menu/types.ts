export interface IConfig {
  [key: string]: ICategory;
}

export default interface ICategory {
  [key: string]: number;
}
