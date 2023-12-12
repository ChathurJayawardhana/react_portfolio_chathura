import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
export default function Hero() {
  return (
    <div>
      <img src={HeroImage} alt='myheroimg'
            className='rounded-full h-auto px-4 mx-auto w-2/3 md:w-full '
            />
    </div>
  )
}
