import React from 'react';
import pixi from '../assets/pixi2.jpg'
import duburi from '../assets/mac.jpg'
import { Link, NavLink } from 'react-router-dom';


const Cards = () => {
    const addToCart =(id, price)=> {

    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center my-20'>
            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl">
            <figure><img src={pixi} alt="" className='w-full h-4/8'/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Pixi Version 1.0</h2>
               
                <p>If a dog chews shoes whose shoes does he choose?</p>
             
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Buy Now</button>
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </div>
            </div>
            </div>

            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl">
            <figure><img src={duburi} alt="" className='w-full h-4/8'/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Pixi Version 1.0</h2>
               
                <p>If a dog chews shoes whose shoes does he choose?</p>
             
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Buy Now</button>
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </div>
            </div>
            </div>


            <div className="card w-96 my-12  h-5/6  bg-base-100 shadow-xl">
            <figure><img src={pixi} alt="" className='w-full h-4/8'/></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Pixi Version 1.0</h2>
               
                <p>If a dog chews shoes whose shoes does he choose?</p>
             
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Buy Now</button>
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </div>
            </div>
            </div>

        



            
        </div>
        
    );
};

export default Cards;