export type BadgeLabel = 'area' | 'population'
export interface ICountry {
    name: string,
    capital: string
    population: number,
    flag: string,
    area: number,
    region: string
}

export enum Color {
    Secondary = 'secondary',
    Primary = 'primary'
}