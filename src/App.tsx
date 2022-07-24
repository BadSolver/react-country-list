import { CountryList } from "./components/CountryList";
import countriesData from './data/countriesData.json'
import { transformedCountries } from "./mappers/index";

export const App = () => {
  const transformedData =  transformedCountries(countriesData);
  console.log(countriesData)
  return (
    <div className="wrapper">
      <div className="container">
        <CountryList countries={transformedData} />
      </div>
    </div>
  );
};

