import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Intro from '../components/Intro';
import Team from './Team';

const Home = () => {
    return (
        <div className='max-w-screen-3xl mx-auto'>
           <Hero></Hero>
           <Intro></Intro>
           <Stats></Stats>
           <Service></Service>
           <Cards></Cards>
           {/* <Team></Team> */}
           <Reviews></Reviews>
           
           

        </div>
    );
};

export default Home;