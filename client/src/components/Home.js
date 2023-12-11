import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-600'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I am a Frontend Developer
            </h2>
            <p className='text-gray-400 py-4 max-w-md'>
            "Hello, I'm  a frontend developer dedicated to 
            crafting seamless, user-centric web experiences. 
            With expertise in HTML, CSS, JavaScript and ReactJS I specialize
             in translating design concepts into elegant and responsive interfaces."
            </p>
            <div>
                <button>
                    portfolio
                    <span>
                    <MdKeyboardArrowRight/>
                    </span>
                    
                </button>
            </div>

        </div>
        <div>
            <img src={HeroImage} alt='myheroimg'
            className='rounded-2xl pl-4 mx-auto w-2/3 md:w-full '
            />
        </div>
       </div>
    </div>
  )
}
