import React, {useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Logo from '../images/logo.png';
import {featuredClient} from '../client';
import SingleFeatured from '../components/SingleFeatured';

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
                <h1 className="home__title">All about travel</h1>
                <img src={Logo} alt="logo"/>
            </div>
            <div className="home__featured">
                <h1 className="home__title">Featured post</h1>
                {
                    featured ? featured.map((singleFeatured)=> 
                    <SingleFeatured key={singleFeatured.fields.id} 
                    image={singleFeatured.fields.image} 
                    tags={singleFeatured.fields.tags} 
                    title={singleFeatured.fields.title}
                    publishDate={singleFeatured.fields.publishDate}/>
                    ) : "Loading..."
                }
            </div>
        </div>
    )
}

export default Home
