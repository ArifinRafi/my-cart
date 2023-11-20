import React from 'react';
import cover1 from '../assets/moboapp.jpg'
import cover2 from '../assets/webdev.jpg'
import cover3 from '../assets/ai_cover.jpg';
import { Link, NavLink } from 'react-router-dom';
import { animate, motion} from 'framer-motion';


const Services = () => {
    const products = [
        {img:cover2, name: 'Web Development', description:'We have an experience web development team to take care of your online presence', links:'/Web'},
        {img:cover1, name: 'MobileApp Development', description:'We develop mobile applications for personal and enterprise users', links:'/mobile'},
        {img:cover3, name: 'AI and ML based Solutions', description: 'We have a bunch of developers to design and develop Artifical Intelligence and Machine Learning based solutions', links: '/ml'}
    ];
    const fadeInfromRight = {
        initial:{
            opacity:0, 
            y:200,
            
        },
        animate:{
            opacity:1, 
            y:0,
            
        transition:{ 
            delay: 0.20, 
            duration: 0.1   
        } ,
    }
    }
    return (

        
        <motion.div className='grid grid-cols-1 lg:grid-cols-3 max-w-2lg md:mx-64  justify-items-center my-20' variants={fadeInfromRight}
  initial='initial'
  whileInView={'animate'}>
            {products.map((products)=>(
                <div className="lg:card w-96 my-12  h-[5/6] rounded-xl lg:mx-4 sm:p-8  bg-base-200 bg-opacity-50 shadow-xl">
                <figure><img src={products.img} alt="" className='w-full rounded'/></figure>
                <motion.div className="card-body" variants={fadeInfromRight}
  initial='initial'
  whileInView={'animate'}>
                    
                    <h2 className="card-title justify-center">{products.name}</h2>
                   
                    <p>{products.description} </p>
                 
                <div className="card-actions justify-center">
                <Link to={products.links}><button className="btn btn bg-[#38296B] text-white rounded-md hover:bg-purple-900">Know More!</button></Link>
                
                </div>
                </motion.div>
                </div>
            ))}
            </motion.div>

            
            
        
        
    );
};

export default Services;