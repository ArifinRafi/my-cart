import React from 'react';
import { animate, motion} from 'framer-motion';

const Stats = () => {
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

const fadeInAnimation = {
    initial:{
        opacity:0, 
    },
    animate:{
        opacity:1, 
    transition:{ 
        delay: 0.05, 
        duration: 1   
    } ,
}
}

  
    return (
  <motion.div className="shadow-2xl text-black  grid grid-cols-1 lg:grid-cols-3 my-10 bg-base-200" variants={fadeInfromleft}
  initial='initial'
  whileInView={'animate'}>
  
  <div className="stat place-items-center">
    <div className="stat-title">Clients</div>
    <div className="stat-value">10+</div>
    <div className="stat-desc">From January, 2023</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Projects</div>
    <div className="stat-value ">20+</div>
    <div className="stat-desc">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Visits</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</motion.div>
    );
};

export default Stats;