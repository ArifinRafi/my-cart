import React from 'react';
import pixi from '../assets/pixi2.jpg'
import rouv_black from '../assets/rouv_black.JPG';
import helmet from '../assets/helmet1.png';
import vms from '../assets/vms.jpg'
import { Link, NavLink } from 'react-router-dom';
import { animate, motion} from 'framer-motion';


const Products = () => {
    const products = [
        {img:pixi, name: 'Pixi Version 1.0', description:'An AI powered Humanoid robot for your business'},
        {img:rouv_black, name: 'Joltorongo', description:'Miraz is an remotely operated underwater Vehicle(ROUV) for underwater search and rescue missions and marine life research'},
        {img:helmet, name: 'Shield 52', description:'A smart IoT based solution for construction workers and heavy duty workers', 
        img:vms, name: 'Shield 52', description:'A smart IoT based solution for construction workers and heavy duty workers'} 
    ];
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
            duration: 1   
        } ,
    }
    }
    return (

        
        <motion.div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center my-20' variants={fadeInfromRight}
  initial='initial'
  whileInView={'animate'}>
            {products.map((products)=>(
                <div className="lg:card w-96 my-12 h-[5/6] rounded-xl lg:p-0 sm:p-8  bg-base-200 bg-opacity-50 shadow-xl">
                <figure><img src={products.img} alt="" className='w-full rounded'/></figure>
                <motion.div className="card-body" variants={fadeInfromRight}
  initial='initial'
  whileInView={'animate'}>
                    
                    <h2 className="card-title justify-center">{products.name}</h2>
                   
                    <p>{products.description} </p>
                 
                <div className="card-actions justify-center">
                <button className="btn btn bg-[#38296B] text-white rounded-md hover:bg-purple-900">Know More!</button>
                
                </div>
                </motion.div>
                </div>
            ))}
            </motion.div>

            
            
        
        
    );
};

export default Products;