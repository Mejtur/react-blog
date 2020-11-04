import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Logo from '../images/logo.png';
import {featuredClient} from '../client';
import SingleFeatured from '../components/SingleFeatured';
import AboutImg from '../images/aboutImage.jpg';
import Footer from '../components/Footer';
import ContinentCart from '../components/ContinentCart';
function Home() {

    const [featured,setFeatured] = useState(null);

    useEffect(()=>{
        featuredClient.getEntries().then((response)=>{
            setFeatured(response.items);
        }).catch(console.error);
    },[]);

    return (
        <div className="home">
            <Navbar />
            <div className="home__logoContainer">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="home__featured">
                <div className="home__featuredContainer">
                {
                    featured ? featured.map((singleFeatured)=> 
                    <SingleFeatured key={singleFeatured.fields.id} 
                    image={singleFeatured.fields.frontImage.fields} 
                    tags={singleFeatured.fields.tags} 
                    title={singleFeatured.fields.title}
                    description={singleFeatured.fields.titleDescription}/>
                    ) : "Loading..."
                }

                <div className="home__continents">
                    <p className="home__title">CHECK OUT MY ADVENTURES:</p>
                    <div className="home__continentsCol">
                        <ContinentCart name="europe"/>
                        <ContinentCart name="africa"/>
                    </div>
                    <div className="home__continentsCol">
                        <ContinentCart name="asia"/>
                        <ContinentCart name="oceania"/>
                    </div>
                </div>
                </div>
                <div className="home__info">
                    <p className="home__sidebarTitle">GET TO KNOW ME</p>
                    <div className="home__about">
                        <img src={AboutImg} alt="about"/>
                        <p className="home__text">Hello, im Mejtur, i love to travel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, molestias pariatur laudantium culpa eaque facere blanditiis et praesentium animi, atque labore quisquam ipsam officia corporis assumenda similique exercitationem? Facere, odio.</p>
                        <p className="home__link">Read more about me</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
