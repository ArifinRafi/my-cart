import React from 'react';

const OrdersForm = () => {
    return (
        <div className='my-45 py-8'>
            <div className='grid  grid-cols-1 lg:grid-cols-2 gap-10 my-20  lg:mx-20'>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered input-primary w-full my-5" />
            <input type="text" placeholder="Phone Number" className="input input-bordered input-primary w- my-5" />
            <input type="text" placeholder="Email" className="input input-bordered input-primary w-full my-5" />
            <input type="text" placeholder="Address" className="input input-bordered input-primary w-full my-5" />
        </div>

        <textarea className="textarea textarea-bordered w-96 h-32 mx-12 lg:mx-20 lg:my-5" placeholder="write your comments"></textarea>
       <div className='flex justify-center  items-center '>
       <button className='btn w-32 bg-purple-800 text-white' >Submit</button>
       </div>
        
        </div>
    );
};

export default OrdersForm;