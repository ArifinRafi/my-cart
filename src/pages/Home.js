import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Cards from '../components/Cards';
import Reviews from '../components/Reviews';
import Service from '../components/Service';
import Intro from '../components/Intro';
import { CarouselWithContent } from '../components/NewHero';
import cover2 from '../assets/cover2.jpg'

const Home = () => {
  const covers = [
    {
      imgSrc: cover2,
      title: "The Beauty of Nature 1",
      description: "It is not so much for its beauty that the forest makes a claim upon men's hearts...",
      exploreLabel: "Explore 1",
      galleryLabel: "Gallery 1",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      title: "The Beauty of Nature 2",
      description: "It is not so much for its beauty that the forest makes a claim upon men's hearts...",
      exploreLabel: "Explore 2",
      galleryLabel: "Gallery 2",
    },
    {
      imgSrc: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
      title: "The Beauty of Nature 3",
      description: "It is not so much for its beauty that the forest makes a claim upon men's hearts...",
      exploreLabel: "Explore 3",
      galleryLabel: "Gallery 3",
    },
  ];

  return (
    <div className='max-w-screen-3xl mx-auto'>
      <CarouselWithContent slides={covers} />
      <div className='max-w-screen-2xl mx-auto'>
        <Intro></Intro>
        <Stats></Stats>
        <Service></Service>
        <Cards></Cards>
        {/* <Team></Team> */}
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Home;
