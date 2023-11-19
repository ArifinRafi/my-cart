import React from 'react';
import cover from '../assets/dog1.jpg';
import header from '../assets/header.svg';
import {animate, motion} from 'framer-motion';

const Cover = () => {

  const fadeInfromRight = {
    initial:{
        opacity:0, 
        y:100,
        
    },
    animate:{
        opacity:1, 
        y:0,
        
    transition:{ 
        delay: 0.20, 
        duration: 0.5   
    } ,
}
}
  return (
    <div className='relative h-[800px]'>
      <img src={cover} className='cover w-full h-full object-cover' alt="" />
      
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <motion.div variants={fadeInfromRight} initial='initial'
  whileInView={'animate'} className='flex items-center justify-start ml-4 absolute inset-0'>
        <img src={header} className='h-[800px] w-[800px] ' alt="" />
      </motion.div>
    </div>
    
  );
};

export default Cover;
