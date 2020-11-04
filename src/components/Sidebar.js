import React, {useState} from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {FaAngleDown} from 'react-icons/fa';
import Logo from '../images/logo.png';
import {Link} from 'react-router-dom';

function Sidebar({isSidebarOpen,setIsSidebarOpen}) {
    const [isDropdownVisible, setIsDropDownVisible] = useState(false);
    return (
        <div className={isSidebarOpen ? "sidebar" : "sidebar hide"}>
            <AiOutlineCloseSquare className="sidebar__close" onClick={()=>setIsSidebarOpen(false)}/>
            <div className="sidebar__logo">
                <img src={Logo} alt="website logo" className="sidebar__logo"/>
            </div>
            <div className="sidebar__links">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <p className="sidebar__link active">HOME</p>
                </Link>
                <Link to="/about" style={{ textDecoration: 'none' }}>
                <p className="sidebar__link">ABOUT</p>
                </Link>
                <div className="sidebar__dropdown">
                    <p className="sidebar__link" onClick={()=>{setIsDropDownVisible(!isDropdownVisible)}}>DESTINATIONS <FaAngleDown /></p>
                    {isDropdownVisible ? 
                    <div className="sidebar__dropdownContent">
                        <Link to="/europe" style={{ textDecoration: 'none' }}>
                            <p className="sidebar__link">EUROPE</p>
                        </Link>
                        <Link to="/africa" style={{ textDecoration: 'none' }}>
                            <p className="sidebar__link">AFRICA</p>
                        </Link>
                        <Link to="/asia" style={{ textDecoration: 'none' }}>
                        <p className="sidebar__link">ASIA</p>
                        </Link>
                        <Link to="/oceania" style={{ textDecoration: 'none' }}>
                        <p className="sidebar__link">OCEANIA</p>
                        </Link>
                            
                    </div>
                    : ""}
                </div>
                <Link to="stories" style={{ textDecoration: 'none' }}>
                    <p className="sidebar__link">TRAVEL STORIES</p>
                </Link>
                <Link to="articles" style={{ textDecoration: 'none' }}>
                    <p className="sidebar__link">ARTICLES</p>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
