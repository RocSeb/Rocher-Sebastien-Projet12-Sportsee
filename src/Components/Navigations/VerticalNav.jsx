import React from 'react';
import './verticalNav.css';

const VerticalNavigation = () => {
  return (
    <nav className='category-nav'>
        <div className="category-container">
            <div className="category"></div>
            <div className="category"></div>
            <div className="category"></div>
            <div className="category"></div>
        </div>
        <span className='copyright'>copyright SportSee 2020</span>
    </nav>
  )
}

export default VerticalNavigation