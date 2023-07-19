import React from 'react';


const LoginForm = () => {
    return (
        <div >
            <div className="card flex-shrink-0 w-96 max-w-xl shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className = "btn text-white bg-gradient-to-r  from-red-500 to-blue-700 shadow-2xl">Login</button>
        </div>
        <div><p>Don't have an account?
          {/* You can open the modal using ID.showModal() method */}
<div className="text-blue-400" onClick={()=>window.signup_modal.showModal()}> <button class="text-blue-500 background-transparent" type="button">
  SignUp Now!</button> </div>
<dialog id="signup_modal" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost  absolute right-2 top-2">✕</button>
    {/* <Signup></Signup> */}
  </form>
</dialog>
           </p></div>
      </div>
    </div>
        </div>
    );
};

export default LoginForm;