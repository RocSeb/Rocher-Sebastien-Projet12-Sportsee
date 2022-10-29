import React from 'react';
import './loader.css';

/**
 * Display Loader component
 * @function Loader
 * @returns {Reactnode} jsx injected in DOM
 */

const Loader = () => {
    
  return (
    <div className="loading">
        <h1>Loading...</h1>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
    </div>
  )
}

export default Loader