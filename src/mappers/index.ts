import { ICountry, ICountryApi } from "../types";

export const transformedCountries = (countries: ICountryApi[]): ICountry[] => {
  const newCountriesData = countries.map(
      (country): ICountry => ({
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        flag: country.flags.svg,
        area: country.area,
        region: country.region,
      })
  )
  return newCountriesData
};