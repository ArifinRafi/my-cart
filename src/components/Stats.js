import React from 'react';

const Stats = () => {
    return (
  <div className="shadow-2xl text-black  grid grid-cols-1 lg:grid-cols-3 my-10 bg-base-200">
  
  <div className="stat place-items-center">
    <div className="stat-title">Clients</div>
    <div className="stat-value">10+</div>
    <div className="stat-desc">From January, 2023</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Projects</div>
    <div className="stat-value ">20+</div>
    <div className="stat-desc">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Total Visits</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    );
};

export default Stats;