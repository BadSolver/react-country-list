import { CountryList } from "./components/CountryList";
import countriesData from './data/countriesData.json'
import { ICountry } from './types/index'
import { transformedCountries } from "./mappers/index";

export const App = () => {
  const transformedData: ICountry[] =  transformedCountries(countriesData);
  return (
    <div className="wrapper">
      <div className="container">
        <CountryList countries={transformedData} />
      </div>
    </div>
  );
};

