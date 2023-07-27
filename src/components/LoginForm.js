import React from 'react';
import robot from '../assets/robot.png'
import SignUpform from './SignUpform';
import { Link } from 'react-router-dom';


const LoginForm = () => {
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    
  }


    return (
      <div>
      <form onSubmit={handleLogin} className="card-body bg-base-200 rounded-xl">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className = "btn text-white bg-gradient-to-r  from-purple-500 to-purple-700 shadow-2xl">Login</button>
        </div>
        <p className='text-center'>Don't have an account? 

      <Link to= {'/Signup'}> <button className="text-blue-500 background-transparent" type="button">
        SignUp Now!</button>
      </Link>
      </p>
        </form>

         
      
    
           
      

      </div>
    );
};

export default LoginForm;