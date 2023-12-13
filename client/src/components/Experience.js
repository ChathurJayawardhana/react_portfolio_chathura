import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import Mui from "../assets/Mui.jpg";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Redux from "../assets/Redux.png";
import Mongo from "../assets/Mongodb-PNG-Image-HD.png";
import Figma from "../assets/Figma.png"

const Experience = () => {
  const techs = [
   
   
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: Mui,
      title: "Mui",
      style: "shadow-white",
    },
  
  
    {
      id: 9,
      src: Node,
      title: "Node Js",
      style: "shadow-green-400",
    },
    {
        id: 10,
        src: Redux,
        title: "Redux",
        style: "shadow-purple-400",
      },
      {
        id: 11,
        src: Mongo,
        title: "MongoDb",
        style: "shadow-green-400",
      },
      {
        id: 12,
        src: Figma,
        title: "Figma",
        style: "shadow-pink-400",
      },



  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-sm md:text-base lg:text-lg">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;