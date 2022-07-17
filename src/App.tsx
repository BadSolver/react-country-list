import { CountryList } from "./components/CountryList";
import { transformedDataCountries } from "./mappers/index";

function App() {
  transformedDataCountries()
  return (
    <div className="wrapper">
      <div className="container">
        <CountryList countries={transformedDataCountries()}/>
      </div>
    </div>
  );
}