import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {GrLinkedin} from 'react-icons/gr';

function Footer() {
    return (
        <div className="footer">
            <p>COPYRIGHTED &copy; 2020 BY MEJTUR</p>
            <div className="footer__social">
                <FaGithub className="footer__icon"/>
                <GrLinkedin className="footer__icon"/>
            </div>
        </div>
    )
}

export default Footer
