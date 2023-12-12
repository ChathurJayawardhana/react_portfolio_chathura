import React from "react";
import logo from '../assets/portfolio/logo.jpg';


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>
       { /*<AboutLayout/>*/} 
          <div >

      <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I work as a <b>Frontend</b> and <b>React </b> developer 
           and have worked with data analysts using  
          <b>PowerBI</b>   and as well as <b>Figma</b>  design. 
            I enjoy hearing things out. I've gained a lot of knowledge 
            by paying close attention. I've discovered how to combine work and life.
             I am a very content individual. I had exciting dreams and ended up 
            studying computing and applied mathematics at the University of
           Jaffna in Sri Lanka.</p>
    </div>
</a>

          </div>
      </div>
    </div>
  );
};

export default About;