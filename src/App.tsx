<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
import { CountryList } from "./components/CountryList";
import { transformedDataCountries } from "./mappers/transformedData";

function App() {
  transformedDataCountries()
  return (
    <div className="wrapper">
      <div className="container">
        <CountryList countries={transformedDataCountries()}/>
      </div>
>>>>>>> 6e229ad928d76dc886744f1e3adb72f4034276b1
    </div>
  );
}

export default App;
