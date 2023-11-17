import React from 'react';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Intro from '../components/Intro';
import { CarouselWithContent } from '../components/NewHero';
import VideoHero from '../components/VideoHero';
import doggo1 from '../assets/dog1.jpg';
import doggo2 from '../assets/dog2.jpg';
import cover2 from '../assets/cover2.jpg';


const Home = () => {
  const covers = [
    {
      imgSrc: doggo1,
      title: "Welcome to Roboway Labs",
      description: "Roboway Labs is a Robotics and tech company that gives you 360 degree tech support",
      exploreLabel: "Projects",
      galleryLabel: "Services",
    },
    {
      imgSrc: doggo1,
      title: "We create things that you imagine",
      description: "Let's begin the journey of infinity",
      exploreLabel: "Projects",
      galleryLabel: "Services",
    },
    {
      imgSrc: doggo2,
      title: "We create the solution that you need",
      description: "Let's solve your problems with our latest technology",
      exploreLabel: "Projects",
      galleryLabel: "Services",
    },
  ];

  return (
    <div className='max-w-screen-3xl mx-auto'>
      <VideoHero></VideoHero>
      {/* <CarouselWithContent slides={covers} /> */}
      {/* <NewSlider></NewSlider> */}
      <div className='max-w-screen-2xl mx-auto'>
        <Intro></Intro>
        <Stats></Stats>
        <Service></Service>
        <Cards></Cards>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
