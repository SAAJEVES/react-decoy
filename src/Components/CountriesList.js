import React from 'react';
import Country from './Country';
import { useGlobalCountries } from '../Utils/context';

const CountriesList = () => {
  const {countriesArray, newPopulation} = useGlobalCountries();
  
  return (
    <div className={`countries-list-grid`}>
      {
        countriesArray.map((country) => {
          // console.log(country);
          return <Country {...country} key={country.name.common} newPopulation={newPopulation} />
        })
      }
    </div>
  )
}

export default CountriesList