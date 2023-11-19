import React from 'react';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Intro from '../components/Intro';
import { CarouselWithContent } from '../components/NewHero';
import { StickyNavbar } from '../components/Navlist';
import VideoHero from '../components/VideoHero';
import doggo1 from '../assets/cover.png';
import doggo2 from '../assets/dog2.jpg';
import cover2 from '../assets/cover.jpg';
import Cover from '../components/Cover';


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
      <Cover></Cover>
      {/* <CarouselWithContent slides={covers} /> */}
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
