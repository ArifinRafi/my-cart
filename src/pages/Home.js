import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';

const Home = () => {
    return (
        <div className='bg-black'>
           
           <Hero></Hero>
           <Stats></Stats>
           <Service></Service>
           <Cards></Cards>
           <Reviews></Reviews>
           
           

        </div>
    );
};

export default Home;