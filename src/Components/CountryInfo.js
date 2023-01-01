import React from 'react';
import { useGlobalCountries } from '../Utils/context';
import { newPopulation } from '../Utils/formula';
import { Link, useNavigate } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

const CountryInfo = (info) => {
  let {commonName,nativeName, population,flags, region, capital,subregion,currencies, languages, borders, tld} = info["0"];

  const currency = Object.keys(currencies)[0];
  const theLanguages = Object.values(languages);
  
  const {isDarkMode} = useGlobalCountries();
  return (
    <div className={`countries ${isDarkMode && "darkmode"}`}>
      <div className={`container container-country ${isDarkMode && "darkmode details-mode"}`}>
        <div className="link-container">
          {/* <button onClick={() => navigate("/")} className={`back ${isDarkMode ? "dark-bg" : "white-bg"}`}>
            <BsArrowLeft className={`arrow-left`} /> <span>Back</span>
          </button> */}
          <Link to='/' className={`back ${isDarkMode ? "dark-bg" : "white-bg"}`}>
            <BsArrowLeft className={`arrow-left`} /> <span>Back</span>
          </Link>
        </div>

        <div className="country-info-container">
          <div className="country-info-flex">
            <div className="country-info-flag">
              <img src={flags["png"]} alt="" />
            </div>

            <div className="country-info-details">
              <h2>{commonName}</h2>
              <div className="details">
                <div className={`details-1 `}>
                  <p>native name: <span>{nativeName}</span></p>
                  <p>population: <span>{newPopulation(population)}</span></p>
                  <p>region: <span>{region}</span></p>
                  <p>sub region: <span>{subregion}</span></p>
                  <p>capital: <span>{capital}</span></p>
                </div>
                <div className={`details-2`}>
                  <p>top level domain: <span>{tld}</span></p>
                  <p>currency: <span>{currencies[currency]["name"]}</span></p>
                  <p>
                    languages: 
                    <span>
                      {
                        theLanguages.map((lan, index) => {
                          if(index === theLanguages.length - 1) {
                            return <span key={index}>{lan}</span>
                          }
                          return <span key={index}>
                            {lan},
                          </span>
                        })
                      }
                    </span>
                  </p>
                </div>
              </div>
              <div className={`border ${isDarkMode && ""}`}>
                  <p>
                    border countries: 
                    {
                      borders ?
                      borders.map((border, index) => {
                        return <span key={index}>{border
                        }</span>
                      }) : ""
                    }
                  </p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default CountryInfo