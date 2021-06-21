export interface IConstants {
	[key: string]: string;
}

export interface IConfig {
  [key: string]: ICategory;
}

export default interface ICategory {
  [key: string]: string;
}
