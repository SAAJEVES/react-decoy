import React from 'react';
import {Link} from 'react-router-dom';
import { useGlobalCountries } from '../Utils/context';
import { newPopulation } from '../Utils/formula';

const Country = ({name, population,flags, region, capital}) => {
  const {isDarkMode, isLoading, setIsloading} = useGlobalCountries();
  const {common} = name;
  const {png} = flags;
  

  return (
    <div className={`country-container ${isDarkMode && "darkM"}`} title={`${common}`}>
      <Link to={`/country/${common}`} className={`links ${isDarkMode && "darkM"}`} onClick={() => setIsloading(!isLoading)}>
        <div className="image-div">
          <img src={png} alt={common} className={`flags`} />
        </div>
        <div className="info">
          <h3>{common}</h3>
          <p>population: <span>{`${newPopulation(population)}`}</span></p>
          <p>region: <span>{region}</span></p>
          <p>capital: <span>{`${capital ? capital : "No Capital"}`}</span></p>
        </div>
      </Link>
    </div>
  )
}

export default Country