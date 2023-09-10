import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Intro from '../components/Intro';

const Home = () => {
    return (
        <div className='bg-black'>
           <Hero></Hero>
           <Intro></Intro>
           <Stats></Stats>
           <Service></Service>
           <Cards></Cards>
           <Reviews></Reviews>
           
           

        </div>
    );
};

export default Home;