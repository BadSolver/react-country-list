import { CountryList } from "./components/CountryList";
import { transformedDataCountries } from "./mappers/transformedData";

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

export default App;
