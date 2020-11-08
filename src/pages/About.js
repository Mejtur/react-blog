import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboutImg from '../images/aboutHero.jpg';
import AboutImage1 from '../images/aboutImage1.jpg';
import AboutImage2 from '../images/aboutImage2.jpg';
function About() {
    return (
        <div className="about">
            <Navbar />
            <div className="about__container">
                <h1 className="about__title">ABOUT ME</h1>
                <img src={AboutImg} alt="about_hero" className="about__image"/>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, provident!</p>
                <p className="about__text">Welcome! I appreciate you stopping by. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum distinctio dignissimos quam officia at deleniti animi non unde fugiat, autem inventore quia libero, et culpa debitis. Maxime, est saepe!
                </p>
                <p className="about__text">Lorem ipsum dolor sit amet.</p>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, distinctio!</p>
                <hr/>
                <h1 className="about__title">My Life of Travel: The Beginning</h1>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, provident!</p>
                <p className="about__text">Welcome! I appreciate you stopping by. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illum distinctio dignissimos quam officia at deleniti animi non unde fugiat, autem inventore quia libero, et culpa debitis. Maxime, est saepe!
                </p>
                <img src={AboutImage1} alt="about__imagetext" className="about__image"/>
                <p className="about__text">Lorem ipsum dolor sit amet.</p>
                <hr/>
                <h1 className="about__title">Where I've Been</h1>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, distinctio!</p>
                <img src={AboutImage2} alt="about__imagetext2" className="about__image"/>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, non obcaecati! Quidem dolor perferendis beatae. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, officia.</p>
                <hr/>
            </div>
            <Footer />
        </div>
    )
}

export default About
