import React, {useState} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import Logo from '../images/logo.png';
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';
function Navbar() {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    return (
        <>
        <div className="navbar">
            <div className="navbar__container">
            <div className="navbar__logo">
                <Link to="/">
                <img src={Logo} alt="website logo" className="navbar__logo"/>
                </Link>
            </div>
            <div className="navbar__links">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className="navbar__link active">HOME</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                    <p className="navbar__link">ABOUT</p>
                </Link>
            <div className="navbar__dropdown">
                <p className="navbar__link">DESTINATIONS <FaAngleDown /></p>
                <div className="navbar__dropdownContent">
                    <Link to="/europe" style={{ textDecoration: 'none' }}>
                        <p className="navbar__link">EUROPE</p>
                    </Link>
                    <Link to="/oceania" style={{ textDecoration: 'none' }}>
                        <p className="navbar__link">OCEANIA</p>
                    </Link>
                    <Link to="/asia" style={{ textDecoration: 'none' }}>
                        <p className="navbar__link">ASIA</p>
                    </Link>
                    <Link to="/africa" style={{ textDecoration: 'none' }}>
                        <p className="navbar__link">AFRICA</p>
                    </Link>
                </div>
            </div>
            <Link to="stories" style={{ textDecoration: 'none' }}>
                <p className="navbar__link">TRAVEL STORIES</p>
            </Link>
            <Link to="articles" style={{ textDecoration: 'none' }}>
                <p className="navbar__link">ARTICLES</p>
            </Link>
            </div>
            <div className="navbar__hamburger">
                <GiHamburgerMenu className="navbar__hamburgerIcon" onClick={()=>setIsSidebarOpen(!isSidebarOpen)}/>
            </div>
            </div>
        </div>
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
        </>
    )
}

export default Navbar
