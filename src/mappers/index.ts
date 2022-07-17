import countriesData from '../data/countriesData.json'
import { ICountry } from '../types'

export const transformedDataCountries = () => {
    const newCountriesData: ICountry[] = countriesData.map((country): ICountry => ({
    name: country.name.common,
    capital: country.capital[0],
    population: country.population,
    flag: country.flags.svg,
    area: country.area,
    region: country.region
    }))
    return newCountriesData
}