import React from 'react';
import mernApp from "../assets/portfolio/mernApp.jpg"
import azureDeploy from "../assets/portfolio/azureDeploy.jpg"
import mongoDeploy from "../assets/portfolio/mongoDeploy.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import fullStackUrlShortner from "../assets/portfolio/fullstackUrlShortner.jpg"
import navbar from "../assets/portfolio/navbar.jpg"



const Portfolio = () => {

    const Portfolio = [
        {
            id: 1,
            src: fullStackUrlShortner,
            href: 'https://github.com/Christopher080/url.git',
        },
        {
            id: 2,
            src: mernApp,
            href: 'https://github.com/Christopher080/mern-app.git',
        },
        {
            id: 3,
            src: mongoDeploy,
            href: 'https://cloud.mongodb.com/v2/64dad2aa11699e42fa948358#/metrics/replicaSet/64dad39bd9e189067e359022/explorer/test/posts/find',
        },
         {
            id: 4,
            src: reactWeather
        },
        {
            id: 5,
            src: azureDeploy
        },
         {
            id: 6,
            src: navbar
        },

        
    ];

    const goToURL = (url) => {
        window.location.href = url;

    };
   
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full 
    text-white md:h-screen">
        
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
    justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 
            border-gray-500">Portfolio</p>
            <p className="py-6">My works with Codes and Demo</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {Portfolio.map(({id, src, href}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img 
            src={src} 
            alt="" 
            className="rounded-md duration-200 hover:scale-105"/>
            
            <div className="flex items-center justify-center">
                <button onClick={() => goToURL(href)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                <button onClick={() => goToURL(href)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
            </div>
        </div>
            ))
        }

        </div>
    </div>
 </div>
  );
};

export default Portfolio;