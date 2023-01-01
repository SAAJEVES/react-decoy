import React, {useCallback, useMemo} from 'react';
import { useGlobalCountries } from '../Utils/context';
import { BsSearch } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const SearchCountries = () => {
  
  const {searchValue, setSearchValue, isDarkMode, continentArray, theRegion, setTheRegion} = useGlobalCountries();

  const vava = useCallback((e) => {
    setSearchValue(e.target.value);
  }, [setSearchValue])

  return (
    <div className={`search-flex`}>
      <div className={`form-container`}>
        <form className={`form`}>
          <label htmlFor="search" className={`search-label ${isDarkMode && "label-mode"}`}>
            <BsSearch className={`search-icon`} />
            <input type="text" id="search" className={`search`}
            value={searchValue}
            onChange={vava}
            placeholder='Search for a country...' />
          </label>
        </form>
      </div>
      <div className="region-container">
        <div className={`region ${isDarkMode && "region-darkmode"}`}>
          Filter by Region <span className={`arrow-span`}><MdOutlineKeyboardArrowDown className='arrow' /></span>
          <ul>
            <li onClick={() => setTheRegion("all")}>All</li>
            {
              continentArray.map((continent, index) => {
                return (<li key={index} onClick={() => setTheRegion(continent)}>{continent}</li>)
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SearchCountries;

