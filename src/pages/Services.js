import React from 'react';
import cover1 from '../assets/moboapp.jpg'
import cover2 from '../assets/webdev.jpg'
import { Link, NavLink } from 'react-router-dom';
import { animate, motion} from 'framer-motion';
import { StickyNavbar2 } from '../components/NavbarNew';


const Services = () => {
    const products = [
        {img:cover2, name: 'Web Development', description:'An AI powered Humanoid robot for your business', links:'/Web'},
        {img:cover1, name: 'MobileApp Development', description:'Miraz is an remotely operated underwater Vehicle(ROUV) for underwater search and rescue missions and marine life research', links:'/mobile'}
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
        <div>
            <StickyNavbar2/>
            <motion.div className='grid grid-cols-1 lg:grid-cols-2 max-w-2lg md:mx-64  justify-items-center my-20' variants={fadeInfromRight}
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
        </div>

            
            
        
        
    );
};

export default Services;