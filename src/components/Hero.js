import React from 'react';
import heroimg from '../assets/roboway_cover.png'
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero min-h-screen bg-black">
  <div className=" grid grid-cols-1 lg:grid-cols-2">
    <div>
    <motion.section className='lg:my-64 mx-10'
    initial={{opacity:0, x:-200}}
    animate={{opacity:1, x:0}}
    transition={{duration:2}}>
    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Automate your Life with us!</h1>
      <p className="py-6 text-white">Roboway is the first RAAS based startup of Bangladesh. Our services are focused on IoT, Embedded Systems, ML/AI and Software based modern solutions. Let's find a way through robotics. The future is Here!</p>
      <button className="btn bg-purple-800 rounded-md hover:bg-purple-900 text-white">Know more!</button>
    </motion.section>
   
    </div>
    {/* cover_Image  */}
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:2}}>
    <img src={heroimg} className="shadow-2xl lg:w-[100%] lg:h-[90%] h-[100%] relative lg:py-0 py-15" /> 
    </motion.div>
    
 
    </div>
  </section>

    );
};

export default Hero;