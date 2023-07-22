import React from 'react';
import heroimg from '../assets/robot.png'

const Hero = () => {
    return (
        <section className="hero min-h-screen bg-black">
  <div className=" grid grid-cols-1 lg:grid-cols-2">
    <div>
    <section className='my-64 mx-10'>
    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Automate your Life with us!</h1>
      <p className="py-6 text-white">Roboway is the first RAAS based startup of Bangladesh. Our services are focused on IoT, Embedded Systems, ML/AI and Software based modern solutions. Let's find a way through robotics. The future is Here!</p>
      <button className="btn btn-primary">Know more!</button>
    </section>
   
    </div>
     
    <div className=''>
    <img src={heroimg} className=" rounded-lg shadow-2xl w-[100%] h-[90%] relative z-[5]" /> 

    {/* <div className='absolute  z-[0] w-[50%] h-[108%] top-0 lg:bg-gradient-to-l from-blue-300'/>   */}
      

        </div>
     
    </div>
  </section>

    );
};

export default Hero;