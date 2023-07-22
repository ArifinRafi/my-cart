import React from 'react';

const SignUpform = () => {
    return (
        <div >          
           <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="Last Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" />
        </div>

        <div className='grid justify-items-center'>
        <button className='btn text-white bg-gradient-to-r flex items-center  from-purple-500 to-purple-800 shadow-2xl mt-5'>Sign Up</button>
        </div>
        
            
        </div>
    );
};

export default SignUpform;