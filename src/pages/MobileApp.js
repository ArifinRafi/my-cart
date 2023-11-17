import React from 'react'
import {CarouselWithContent} from '../components/NewHero'
import flutter from '../assets/flutter.png';
import android from '../assets/android.png';
import kotlin from '../assets/Kotlin_logo.svg.png'
import cover2 from '../assets/cover.jpg';
import moboapp from '../assets/moboapp.jpg'
const details = `With a broad range of market-leading mobile application development services under our belt, we are adept at converting our solutions into outcomes that drive your company's expansion. We develop responsive, cross-platform mobile applications. We succeed where others fail because we have the most aesthetically pleasing UI and a safe backend. Uber-like startups and huge corporations alike are among the many industries and clientele served by Team Roboway Labs' state-of-the-art mobile app development services.`
const covers = [
  {
    imgSrc: moboapp,
    title: "Mobile App Development",
    description: "We develop mobile applications for Android and IOS platform",
    exploreLabel: "Call for your project",
    galleryLabel: "Email us",
  }
];

const icons = [
  {
    imgSrc: flutter,
  },
  {
    imgSrc: android,
  },
  {
    imgSrc: kotlin,
  }
];



export const MobileApp = () => {
  return (

    <div className=' max-w-2lg mx-auto'>
      
        <CarouselWithContent slides={covers} />
        <div className='grid justify-items-center my-12'>
        <h1 className='text-3xl font-bold '>
          Mobile App Development
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-12 my-24'>
         <div className='text-xl lg:my-24 mx-12 text-[#38296B] font-semibold'>
          {details}
          </div> 
          <img className='rounded-lg' src={moboapp} alt="" />
        </div>
        <h1 className='text-3xl font-bold '>
          Technologies that we use
        </h1>
        <div className='lg:flex items-center justify-evenly '>
          {
            icons.map((icon, map)=> (
              <div className='w-[120px] mx-12 my-12'>
                <img src={icon.imgSrc} alt="" /> 
              </div> 
            ))
            
          }
        </div>
        </div>

    </div>
  )
}
