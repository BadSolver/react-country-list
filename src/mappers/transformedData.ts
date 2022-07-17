import countryData from '../data/сountryData.json'
import { ICountry } from '../types'

export const transformedDataCountries = () => {
    const newData: ICountry[] = countryData.map((country): ICountry => 
    ({
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        flag: country.flags.svg,
        area: country.area,
        region: country.region
    }))
    return newData
}