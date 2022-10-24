import React from 'react';
import './verticalNav.css';

const VerticalNavigation = () => {
  return (
    <nav className='category-nav'>
        <div className="category-container">
            <div className="category">
              <img src="/velo.png"/>
            </div>
            <div className="category">
            <img src="/yoga.png"/>
            </div>
            <div className="category">
            <img src="/nage.png"/>
            </div>
            <div className="category">
            <img src="/fonte.png"/>
            </div>
        </div>
        <span className='copyright'>copyright SportSee 2020</span>
    </nav>
  )
}

export default VerticalNavigation