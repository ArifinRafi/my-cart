import React from 'react';
import pixi from '../assets/pixi2.jpg'
import duburi from '../assets/mac.jpg'
import { Link, NavLink } from 'react-router-dom';


const Cards = () => {
    const addToCart =(id, price)=> {

    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center my-20'>
            <div className="card w-96 my-12 h-8/10 bg-base-100 shadow-xl">
            <figure><img src={pixi} alt="" /></figure>
            <div className="card-body ">
                
                <h2 className="card-title justify-center">Pixi Version 1.0</h2>
               
                <p>If a dog chews shoes whose shoes does he choose?</p>
             
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Buy Now</button>
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </div>
            </div>
            </div>



            <div className="card w-96  my-12 bg-base-100 shadow-xl" id='duburi'>
            <figure><img src={duburi} alt="" /></figure>
            <div className="card-body">
             <h2 className="card-title justify-center">UnderRov 2.0</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-around">
            <button className="btn btn-primary">Buy Now</button>
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </div>
            </div>
            </div>




            <div className="card w-96 h-8/10 my-12 bg-base-100 shadow-xl">
            <figure><img src={pixi} alt="Shoes" /></figure>
            <div className="card-body">
             <h2 className="card-title justify-center">Pixi Version 2.0</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-around">
            <button className="btn flex  btn-primary">Buy Now</button>
            <button className="btn btn-primary">
            <NavLink to='/Cart'> <button className='btn btn-primary'>Add to Cart</button> </NavLink>
            </button>
            </div>
            </div>
            </div>
        </div>
        
    );
};

export default Cards;