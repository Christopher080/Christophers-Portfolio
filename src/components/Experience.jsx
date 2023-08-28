import React from 'react';
import github from "../assets/github.png";
import css from "../assets/css.png";
import GraphQl from "../assets/graphql.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import rails from "../assets/rails.png";
import python from "../assets/python.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.png";
import CImage from "../assets/C++.png";
import azure from "../assets/azure.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: github,
            title: "GITHUB",
            style: 'shadow-gray-400',
        },
        {
            id: 4,
            src: GraphQl,
            title: "GRAPHQL",
            style: 'shadow-pink-400',
        },

        {
            id: 5,
            src: javascript,
            title: "JAVASCRIPT",
            style: 'shadow-yellow-500',
        },
        {
            id: 6,
            src: nextjs,
            title: "NEXTJS",
            style: 'shadow-white',
        },
         {
            id: 7,
            src: node,
            title: "NODE",
            style: 'shadow-orange-500',
        },
        {
            id: 8,
            src: reactImage,
            title: "REACT",
            style: 'shadow-orange-500',
        },
        {
            id: 9,
            src: tailwind,
            title: "tailwindL",
            style: 'shadow-orange-500',
        },
        {
            id: 10,
            src: azure,
            title: "Azure",
            style: 'shadow-blue-500',
        },
        {
            id: 11,
            src: CImage,
            title: "C++",
            style: 'shadow-orange-500',
        },
        {
            id: 12,
            src: mongodb,
            title: "MongoDb",
            style: 'shadow-green-400',
        },
        {
            id: 13,
            src: mysql,
            title: "MySQL",
            style: 'shadow-orange-500',
        },
        {
            id: 14,
            src: php,
            title: "php",
            style: 'shadow-gray-400',
        },
        {
            id: 15,
            src: python,
            title: "Python",
            style: 'shadow-blue-400',
        },
        {
            id: 16,
            src: rails,
            title: "Rails",
            style: 'shadow-white',
        },
    ];

  return (
    <div 
    name="experience" 
    className="bg-gradient-to-b from-gray-800 to-black w-full 
    h-scree">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center
        w-full h-30 text-white ">
            
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500
                p-2 inline"></p>
                <p className="py-6 text-2xl">Full Stack Technology Experience </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3
            gap-8 text-center py-8 px-12 sm:px-0">

                {techs.map(({ id, src, title, style }) =>(
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} 
                    alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Experience;