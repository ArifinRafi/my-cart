import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const SignUpform = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignup=(event)=> {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      
      createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(err => console.error(err))
      
    }

    return (
      <div>
      <form onSubmit={handleSignup} className="card-body bg-base-200 rounded-xl">
      <div className="form-control">
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input type="text" name='FirstName' placeholder="First Name" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input type="text" name='LastName' placeholder="Last Name" className="input input-bordered" />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone Number</span>
        </label>
        <input type="digit" name='contact' placeholder="Phone Number" className="input input-bordered" />
      </div>


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
        <button className = "btn text-white bg-gradient-to-r  from-purple-500 to-purple-700 shadow-2xl">Signup</button>
      </div>
      <p className='text-center my-5'>Already have an account? <Link to={'/Login'} className='text-blue-500'>Login</Link></p>
      </form>

      
      </div>
    );
};

export default SignUpform;