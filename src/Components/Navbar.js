import React from 'react';
import { useGlobalCountries } from '../Utils/context';
import { BsFillMoonFill, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const {isDarkMode,setIsDarkMode} = useGlobalCountries();


  return (
    <React.Fragment>
      <header>
        <div className={`container ${isDarkMode ? "dark-bg" : "white-bg"}`}>
          <div className={`header-flex`}>
            <div className={`location`}>
              <h2 className={`${isDarkMode && "moon-fill-white"}`}>Where in the world</h2>
            </div>
            <div className={`mode-control`}>
              <button className={`header-btn`} onClick={() => setIsDarkMode(!isDarkMode)}>
                {
                  isDarkMode ? <BsFillMoonFill className={`moon-fill ${isDarkMode && "moon-fill-white"}`} />: <BsMoon className={`moon`} />
                }
                <span className={`header-btn-span ${isDarkMode && "moon-fill-white"}`}>Dark Mode</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Navbar