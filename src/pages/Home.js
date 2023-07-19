import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LoginForm from '../components/LoginForm';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Service from '../components/Service';

const Home = () => {
    return (
        <div className='bg-black'>
           <Navbar></Navbar>
           <Hero></Hero>
           <Stats></Stats>
           <Service></Service>
           <Cards></Cards>
           <Reviews></Reviews>
           
           <Footer></Footer>

        </div>
    );
};

export default Home;