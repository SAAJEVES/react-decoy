import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGlobalCountries } from '../Utils/context';
import CountryInfo from '../Components/CountryInfo';
import Loading from '../Components/Loading';
const url = `https://restcountries.com/v3.1/name/`;

const SingleCountry = () => {
  const [countryInfo, setCountryInfo] = useState(null);
  const {isLoading, setIsLoading, isSingleCountry, setIsSingleCountry, theSearch} = useGlobalCountries();
  let {name} = useParams();

  const getSingleCountry = async() => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${name}`);
      // console.log(response);
      const data = await response.json();

      const country = data.map((item) => {
        const {name, population,flags, region, capital,subregion,currencies, languages, borders, tld} = item;
        let nameArray = Object.keys(name);

        const commonName = name[nameArray[0]];
        // getting native name
        const firstLan = Object.keys(languages);
        const nativeName = name["nativeName"][firstLan[0]]["common"];

        return {commonName,nativeName, population,flags, region, capital,subregion,currencies, languages, borders, tld, firstLan};
      });
      setCountryInfo(country);
      setIsLoading(false);
      setIsSingleCountry(true);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(() => {
    getSingleCountry();

  }, [isLoading]);

  return (
    <React.Fragment>
      {
        isLoading && <Loading />
      }

      {
        isSingleCountry && <CountryInfo {...countryInfo}  />
      }

      {
        theSearch && "see"
      }
      
    </React.Fragment>
  )
}

export default SingleCountry;