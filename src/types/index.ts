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
  name: { common: string };
  flag: { svg: string }
}