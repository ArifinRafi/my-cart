import React from 'react';
import pixi from '../assets/pixi2.jpg'
import rouv_black from '../assets/rouv_black.JPG';
import helmet from '../assets/helmet1.png';
import { Link, NavLink } from 'react-router-dom';


const Cards = () => {
    const addToCart =(id, price)=> {

    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center my-20'>
            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl relative">
            <figure><img src={pixi} alt="" className='w-full '/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Pixi Version 1.0</h2>
               
                <p> An AI powered Humanoid robot for your business</p>
             
            <div className="card-actions justify-center">
            <button className="btn btn bg-purple-700 text-white hover:bg-purple-600">Know More!</button>
            
            </div>
            </div>
            </div>

            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl">
            <figure><img src={rouv_black} alt="" className='w-full h-4/8'/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Miraz 1.0</h2>
               
                <p>Miraz is an remotely operated underwater Vehicle(ROUV) for underwater search and rescue missions and marine life research</p>
             
            <div className="card-actions justify-center">
            <button className="btn btn bg-purple-700 text-white hover:bg-purple-600">Know More!</button>
            </div>
            </div>
            </div>


            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl">
            <figure><img src={helmet} alt="" className='w-full py-16 bg-gray-500 h-4/8'/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Shield 52</h2>
               
                <p>A smart IoT based solution for construction workers and heavy duty workers</p>
             
            <div className="card-actions justify-center">
            <button className="btn bg-purple-700 text-white hover:bg-purple-600">Know More!</button>
           
            </div>
            </div>
            </div>

        



            
        </div>
        
    );
};

export default Cards;