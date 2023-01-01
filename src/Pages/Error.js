import React from 'react';
import error from "../error.jpg";

const Error = () => {
  
  return (
    <div className='error-comp'>
      <div className="error-image-container">
        <img src={error} alt="error" />
      </div>
    </div>
  )
}

export default Error