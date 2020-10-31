import React, {useState} from 'react';
import {FaAngleDown} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import Logo from '../images/logo.png';
import Sidebar from './Sidebar';
function Navbar() {
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
    return (
        <>
        <div className="navbar">
            <div className="navbar__container">
            <div className="navbar__logo">
                <img src={Logo} alt="website logo" className="navbar__logo"/>
            </div>
            <div className="navbar__links">
            <p className="navbar__link active">HOME</p>
            <p className="navbar__link">ABOUT</p>
            <div className="navbar__dropdown">
                <p className="navbar__link">DESTINATIONS <FaAngleDown /></p>
                <div className="navbar__dropdownContent">
                    <p className="navbar__link">EUROPE</p>
                    <p className="navbar__link">AFRICA</p>
                    <p className="navbar__link">ASIA</p>
                    <p className="navbar__link">OCEANIA</p>
                </div>
            </div>
                <p className="navbar__link">TRAVEL STORIES</p>
                <p className="navbar__link">ARTICLES</p>
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
