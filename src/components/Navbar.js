import React from 'react'
import '../sass/layout/_navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
            <p className="navbar__link active">HOME</p>
            <p className="navbar__link">ABOUT</p>
            <p className="navbar__link">DESTINATIONS</p>
            <p className="navbar__link">TRAVEL STORIES</p>
            <p className="navbar__link">ARTICLES</p>
            </div>
        </div>
    )
}

export default Navbar
