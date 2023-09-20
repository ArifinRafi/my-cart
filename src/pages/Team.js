import React from 'react';
import { ProfileCard } from '../components/Profile'; 
import { CarouselTransition } from '../components/Slider'; 

const Team = () => {
    return (
        <div>
            <ProfileCard></ProfileCard>
            <CarouselTransition/>
        </div>
    );
};

export default Team;