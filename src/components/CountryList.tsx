import { ICountry } from "../types"
import { CountryItem } from "./CountryItem"

interface ICountryList {
  countries: ICountry[]
}

export const CountryList = ({countries}: ICountryList) => {
  return (
    <ul>
      {countries.map((country: ICountry) => {
        return <CountryItem country={country}/>
      })}
    </ul>
  )
}
