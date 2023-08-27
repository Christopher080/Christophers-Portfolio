import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full">

        <div classname="pb-8">
            <p className="text-4xl font-bold inline border-b-4
            border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
            My name is christopher.<br/>
            I'm a Dedicated Full Stack Software Developer with 4 years of experience 
            specializing in modern architecture, development, and DevOps practices. 
            Excels in designing and implementing robust, scalable solutions while driving 
            continuous improvement through agile methodologies. 
            Seeking to contribute technical expertise to a dynamic team.
        </p>

        <br />

        <p className="text-xl">
          <ol>
        <li>•	Strong problem-solving and troubleshooting abilities</li>
        <li>•	Excellent interpersonal and communication skills</li>
        <li>•	Agile methodologies and project management</li>
        <li>•	Cross-functional collaboration and team leadership</li>
        <li>•	Continual learning and adaptability to emerging technologies</li>
            </ol>
        </p>

    </div>
    </div>
  )
}

export default About;