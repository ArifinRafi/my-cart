import React from 'react';

const Stats = () => {
    return (
        // <div className='grid grid-cols-3 bg-black '>

        //     <div><span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>100+</span> <span className='text-2xl'>User</span></div>
        //     <div><span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>200+</span> <span className='text-2xl'>Projects</span></div>
        //     <div><span className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>200+</span> <span className='text-2xl'>User</span></div>
            
        //     <span></span>

            
            

            
        // </div>

        <div className="shadow  grid grid-cols-1 lg:grid-cols-3 my-10 bg-base-200">
  
  <div className="stat place-items-center">
    <div className="stat-title">Clients</div>
    <div className="stat-value">100+</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Projects</div>
    <div className="stat-value text-secondary">20+</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    );
};

export default Stats;