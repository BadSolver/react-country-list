import { Color, ICountry } from "../types";
import { Badge } from "./Badge";

interface ICountryItem {
  country: ICountry;
}

export const CountryItem = ({ country }: ICountryItem) => {
  return (
    <li className="list-group-item row d-flex align-items-center gap-3">
      <img className="col-1" src={country.flag}></img>
      <h5 className="col-2 m-0">{country.name}</h5>
      <p className="col-2 m-0">{country.capital}</p>
      <p className="col-2  m-0">{country.region}</p>
      <Badge color={Color.Dark} value={country.area} label='area'/>
      <Badge color={Color.Primary} value={country.population} label='population'/>
    </li>
  );
};
