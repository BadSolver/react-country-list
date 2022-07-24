export interface ICountry {
  name: string;
  flag: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}

export enum Color {
  Dark = 'dark',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
}

export type BadgeLabel = 'area' | 'population';

export interface ICountryApi {
  capital: string[];
  population: number;
  region: string;
  area: number;
  name: ICountryNameApi;
  flags: ICountryFlagApi
}

interface ICountryFlagApi {
  png: string;
  svg: string;
}

interface ICountryNameApi {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    } | undefined;
  }
}