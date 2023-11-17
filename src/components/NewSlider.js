import React from 'react';
import doggo1 from '../assets/dog1.jpg';
import doggo2 from '../assets/dog2.jpg';
import cover2 from '../assets/cover2.jpg';

const NewSlider = () => {
        return (
                <div className="h-full carousel carousel-vertical rounded-box">
  <div className="carousel-item h-full">
    <img src={doggo1} />
  </div> 
  <div className="carousel-item h-full">
    <img src={doggo2} />
  </div> 
   
</div>
        );
};

export default NewSlider;