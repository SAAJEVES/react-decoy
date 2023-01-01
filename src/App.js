import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Countries from "./Pages/Countries";
import SingleCountry from "./Pages/SingleCountry";
import { useGlobalCountries } from "./Utils/context";
import './App.css';

function App() {
  const {countriesArray} = useGlobalCountries();
  // console.log(countriesArray);
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country" >
          <Route path=":name" element={<SingleCountry />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
