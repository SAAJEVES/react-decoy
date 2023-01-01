import React from 'react';
import { useGlobalCountries } from '../Utils/context';
import SearchCountries from '../Components/SearchCountries';
import CountriesList from '../Components/CountriesList';
import Loading from '../Components/Loading';
import Error from './Error';

const Countries = () => {
  const {isDarkMode, isLoading, isCountriesList, isSingleCountry, isErrorPage} = useGlobalCountries();
  
  return (
    <main className={`countries ${isDarkMode && "darkmode"}`}>
      <div className={`container ${isDarkMode && "darkmode"}`}>
        <SearchCountries />
        {
          isCountriesList ? <CountriesList /> : null
        }
        {
          isLoading ? <Loading /> : null
        }
        {
          isErrorPage ? <Error /> : null
        }
      </div>
    </main>
  )
}

export default Countries