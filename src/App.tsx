import { CountryList } from "./components/CountryList";
import { transformedCountriesData } from "./mappers/index";

export const App = () => {
  transformedCountriesData();
  return (
    <div className="wrapper">
      <div className="container">
        <CountryList countries={transformedCountriesData()} />
      </div>
    </div>
  );
};
