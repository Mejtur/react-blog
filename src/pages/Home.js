import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Logo from '../images/logo.png';
import {featuredClient} from '../client';
import SingleFeatured from '../components/SingleFeatured';
import AboutImg from '../images/aboutImage.jpg';
import Footer from '../components/Footer';

function Home() {

    const [featured,setFeatured] = useState(null);

    useEffect(()=>{
        featuredClient.getEntries().then((response)=>{
            setFeatured(response.items);
        }).catch(console.error);
    },[]);


    console.log(featured);
    return (
        <div className="home">
            <Navbar />
            <div className="home__logoContainer">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="home__featured">
                <div className="home__featuredContainer">
                <h1 className="home__title">Featured posts:</h1>
                {
                    featured ? featured.map((singleFeatured)=> 
                    <SingleFeatured key={singleFeatured.fields.id} 
                    image={singleFeatured.fields.frontImage.fields} 
                    tags={singleFeatured.fields.tags} 
                    title={singleFeatured.fields.title}
                    description={singleFeatured.fields.titleDescription}/>
                    ) : "Loading..."
                }
                </div>
                <div className="home__info">
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
