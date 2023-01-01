import React, { useState, useContext, useEffect } from 'react';

const CountriesContext = React.createContext();
const url = `https://restcountries.com/v3.1/all`;
const urlInput = `https://restcountries.com/v3.1/name/`;
const urlRegion = `https://restcountries.com/v3.1/region/`;


const CountriesProvider = ({children}) => {
  // some functionalities
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCountriesList, setIsCountriesList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [countriesArray, setCountriesArray] = useState([]);
  const [continentArray, setContinentArray] = useState([]);
  const [isSingleCountry, setIsSingleCountry] = useState(false);
  const [isErrorPage, setIsErrorPage] = useState(false);

  // main functionalities
  const [theRegion, setTheRegion] = useState("");

  // Functions
  const fetchContinentList = async() => {
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      // Continent
      const continent = data.map((country, index) => {
        const {region} = country;
        return region;
      });

      const continentSet = [...new Set([...continent])].sort();
      setContinentArray(continentSet.filter((item) => item !== "Antarctic"));
    } catch(error) {
      // setIsLoading(true);
    }
  }

  const fetchCountry = async() => {
    setIsCountriesList(false);
    try {
      const response = await fetch(`${url}`);
      const data = await response.json();

      // Countries
      const newData = data.map((country, index) => {
        const {name, population,flags, region, capital} = country;
        return {name, population,flags, region,  capital};
      });

      setCountriesArray(newData);
      setIsLoading(false);
      setIsCountriesList(true);
    } catch(error) {
      // setIsLoading(false);
    }
  };

  // Fetch country as letters are inputed
  const fetchInputCountry = async(name) => {
    setIsLoading(true);
    setIsCountriesList(false);
    setIsErrorPage(false);
    try {
      const response = await fetch(`${urlInput}${name}`);

      if (response.status > 400) {
        throw new Error("not found");
      }

      const data = await response.json();

      const newData = data.map((country, index) => {
      const {name, population,flags, region, capital} = country;
      return {name, population,flags, region, capital};
      });

      setCountriesArray(newData);
      setIsLoading(false);
      setIsCountriesList(true);
    } catch (error) {
      if (name.length < 1) {
        fetchCountry()
      } else {
        setIsLoading(false);
        setIsCountriesList(false);
        setIsErrorPage(true);
      }
    }
    
  }

  // Fetch regions
  const fetchRegion = async(name) => {
    setIsCountriesList(false);
    setIsLoading(true);
    setIsErrorPage(false);
    
    try {
      if (name === "all") {
        return fetchCountry();
      }
      const response = await fetch(`${urlRegion}${name}`);
      const data = await response.json();

      // region
      const newData = data.map((country, index) => {
        const {name, population,flags, region, capital} = country;
        return {name, population,flags, region, capital};
      });

      setCountriesArray(newData);
      setIsLoading(false);
      setIsCountriesList(true);
    } catch(error) {
      // setIsLoading(true);
    }
  }

  // useEffects
  useEffect(()=> {
    fetchContinentList();
  },[]);

  useEffect(() => {
    if (searchValue.length < 1) {
      fetchCountry();
    } else {
      fetchInputCountry(searchValue);
    }
  }, [ searchValue ]);

  useEffect(()=> {
    fetchRegion(theRegion);
  },[ theRegion ]);

  return (
    <CountriesContext.Provider value={{countriesArray, isDarkMode,setIsDarkMode, isLoading, setIsLoading, searchValue, setSearchValue, continentArray, isCountriesList, setIsCountriesList,isSingleCountry, setIsSingleCountry, theRegion, setTheRegion, isErrorPage, setIsErrorPage}}>
      {children}
    </CountriesContext.Provider>
  )

}

const useGlobalCountries = () => {
  return useContext(CountriesContext);
}

export {useGlobalCountries, CountriesProvider}
