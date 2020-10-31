import React, {useState} from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {FaAngleDown} from 'react-icons/fa';
import Logo from '../images/logo.png';

function Sidebar({isSidebarOpen,setIsSidebarOpen}) {
    const [isDropdownVisible, setIsDropDownVisible] = useState(false);
    return (
        <div className={isSidebarOpen ? "sidebar" : "sidebar hide"}>
            <AiOutlineCloseSquare className="sidebar__close" onClick={()=>setIsSidebarOpen(false)}/>
            <div className="sidebar__logo">
                <img src={Logo} alt="website logo" className="sidebar__logo"/>
            </div>
            <div className="sidebar__links">
                <p className="sidebar__link active">HOME</p>
                <p className="sidebar__link">ABOUT</p>
                <div className="sidebar__dropdown">
                    <p className="sidebar__link" onClick={()=>{setIsDropDownVisible(!isDropdownVisible)}}>DESTINATIONS <FaAngleDown /></p>
                    {isDropdownVisible ? 
                    <div className="sidebar__dropdownContent">
                        <div className="sidebar__link">EUROPE</div>
                        <div className="sidebar__link">AFRICA</div>
                        <div className="sidebar__link">ASIA</div>
                        <div className="sidebar__link">OCEANIA</div>
                    </div>
                    : ""}
                </div>
                <p className="sidebar__link">TRAVEL STORIES</p>
                <p className="sidebar__link">ARTICLES</p>
            </div>
        </div>
    )
}

export default Sidebar
