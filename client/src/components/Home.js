import React from 'react'
import { Link } from 'react-scroll';
import { MdKeyboardArrowRight } from "react-icons/md";
import Hero from '../layout/Hero';

export default function Home() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-600 pt-16 md:pt-0'>
       <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col sm:pt-10 md:pt-10 justify-center h-full md:flex-grow'>
            <h2 className='text-4xl sm:text-7xl  font-bold text-white'>
                I am a Frontend Developer
            </h2>
            <p className='text-gray-400 py-4 max-w-md'>
            "Hello, I'm  a frontend developer dedicated to 
            crafting seamless, user-centric web experiences. 
            With expertise in HTML, CSS, JavaScript and ReactJS I specialize
             in translating design concepts into elegant and responsive interfaces."
            </p>
            <div className='flex space-x-4'>
                <div>
                <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                < MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
                </div>
               <div>
               <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                < MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
               </div>
                
            </div>

        </div>
        <div style={{paddingLeft:"70px",paddingTop:"50px"}}>
            <Hero/>
        </div>
       </div>
    </div>
  )
}
