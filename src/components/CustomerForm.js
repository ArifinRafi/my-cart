import React from 'react';

const CustomerForm = () => {
    return (
        <div>
            
              <div className='flex justify-around mx-24 my-8'>
              <input type="text " placeholder="Name" className="input input-bordered w-full max-w-xl" />
              <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xl" />
              </div>
              <div className='mx-36 '>
              <input type="text " placeholder="Subject" className="input input-bordered w-full max-w-full" />
              <details className="dropdown mb-32">
              <summary className="m-1 btn">Subject</summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li><a>Embedded Systems</a></li>
              <li><a>Home management system</a></li>
  </ul>
</details>
              </div>
              
            
           
        </div>
        
    );
};

export default CustomerForm;