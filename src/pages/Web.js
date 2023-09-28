import React from 'react'
import{CarouselTransition} from '../components/Slider'
import {CarouselWithContent} from '../components/NewHero'
import reactjs from '../assets/react.png';
import Expressjs from '../assets/express.png';
import mongojs from '../assets/mongodb.svg'
import cover2 from '../assets/cover.jpg'
const details = `With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber.

Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.`
const covers = [
  {
    imgSrc: cover2,
    title: "Web Development",
    description: "We make your businesses online",
    exploreLabel: "Call for your project",
    galleryLabel: "Email us",
  }
];

const icons = [
  {
    imgSrc: reactjs,
  },
  {
    imgSrc: Expressjs,
  }
];



export const Web = () => {
  return (

    <div className=' max-w-2lg mx-auto'>
      
        <CarouselWithContent slides={covers} />
        <div className='grid justify-items-center my-12'>
        <h1 className='text-3xl font-bold '>
          Web Development
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-12 my-24'>
         <div className='text-xl lg:my-24 mx-12 text-[#38296B] font-semibold'>
          {details}
          </div> 
          <img className='rounded-lg' src={cover2} alt="" />
        </div>
        <h1 className='text-3xl font-bold '>
          Technologies that we use
        </h1>
        <div className='lg:flex justify-evenly '>
          {
            icons.map((icon, map)=> (
              <div className='w-[80px] mx-12 my-12'>
                <img src={icon.imgSrc} alt="" /> 
              </div> 
            ))
            
          }
          <img className='w-32 lg:mx-0 mx-4 mb-4' src={mongojs} alt="" /> 
        </div>
        </div>

    </div>
  )
}
