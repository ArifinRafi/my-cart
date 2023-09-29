import React from 'react';
import { CarouselTransition } from '../components/Slider';
import dichari1 from '../assets/dichari1.jpg';
import dichari2 from '../assets/dichari2.jpg';
import { animate, motion} from 'framer-motion';

const Service = () => {
  const fadeInfromleft = {
    initial:{
        opacity:0, 
        y:100,
        
    },
    animate:{
        opacity:1, 
        y:0,
        
    transition:{ 
        delay: 0.20, 
        duration: 1   
    } ,
}
}
  const covers = [
    { src: dichari1 },
    { src: dichari2 }
  ];

  return (
    <section className="shadow-xl overflow-hidden bg-base-200 text-black sm:grid grid-cols-1 lg:grid-cols-2">
      <motion.div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-base-200" variants={fadeInfromleft}
  initial='initial'
  whileInView={'animate'}>
        <div
          className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
        >
          <h2 className="text-2xl font-bold  md:text-3xl">
            Our Achievements
          </h2>

          <p className=" md:mt-4 md:block ">
            We have the most experienced people in our team who competed worldwide in different international and national competitions in previous years. Lets make the 4th Industrial Revolution together
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-[#38296B] px-12 py-3 text-sm font-medium text-white transition hover:bg-purple-700 focus:outline-none focus:ring focus:ring-yellow-400 my-12"
            >
              Let's explore with us!
            </a>
          </div>
        </div>
      </motion.div>

      <div className='h-full'>
        <CarouselTransition images={covers} />
      </div>
    </section>
  );
};

export default Service;
