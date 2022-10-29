import React from 'react';
import './horizontalNav.css';

/**
 * Display HorizontalNavigation component
 * @function HorizontalNavigation
 * @returns {Reactnode} jsx injected in DOM
 */
const HorizontalNavigation = () => {
  return (
    <nav className='nav-container'>
        <div className='logo'>
            <img src="/logo.png" alt="logo SportSee" />
            <span>SportSee</span>
        </div>
        <div className='main-nav'>
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    </nav>
  )
}

export default HorizontalNavigation