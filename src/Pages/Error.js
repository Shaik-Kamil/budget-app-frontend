import React from 'react';
import error from '../assets/404.jpg';
const Error = () => {
  return (
    <div className="error">
      <img src={error} alt="error"></img>
    </div>
  );
};

export default Error;
