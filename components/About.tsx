import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutPic from './rock.jpg'


type Props = {}

function About({}: Props) {
  return (<><div className="flex justify-center md:hidden">
    <h3 className="text-lg md:text-2xl uppercase tracking-wider text-gray-500">About</h3>
  </div><div className="flex flex-col md:flex-row items-center justify-center md:justify-start max-w-7xl mx-auto py-16">
      <div className="hidded md:block  h-56 w-56 md:w-1/2 md:h-1/2 lg:w-1/2">
        <Image
          src={AboutPic}
          alt="About Picture"
          className="hidden md:block rounded-lg object-cover h-full w-full" />
      </div>

      <div className="flex flex-col items-center md:items-start md:w-1/2 px-4 md:px-10 md:py-0">
        <h3 className="text-3xl md:text-5xl font-bold font-sans mb-4">About Me</h3>
        <p className="text-sm md:text-xl text-gray-500 leading-loose mb-8">
          I am a full stack JavaScript developer with a focus on front end frameworks including React and Next.js. I have a passion for creating visually appealing and user-friendly websites and applications that leave a lasting impression. My experience in HTML, CSS, and JavaScript, as well as my ability to develop responsive and interactive interfaces using modern frameworks, make me a valuable asset to any team.
        </p>
        <ul className="list-disc list-inside text-sm md:text-xl text-gray-500 mb-8">
          <li>Completed Harvards CS50X course taught by David Malan in 2022 reigniting a passion for software development</li>
          <li>Proficient in React and Next.js</li>
          <li>Experience with responsive design and cross-browser compatibility</li>
          <li>Passionate about creating sleek and modern designs</li>
          <li>Dedicated to staying up-to-date with the latest web development trends and technologies</li>
        </ul>
        <p className="text-md md:text-xl text-gray-500 leading-loose mb-8">
          My ultimate goal is to make a positive impact in the field of web development, to be a part of something greater than myself, and to bring value to a team while pursuing my dream. I am currently seeking new opportunities to apply my skills and expertise in a challenging and dynamic environment.
        </p>
        <a href="https://github.com/PKFireBarry" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
          View my work
        </a>
      </div>
    </div></>

  )
}

export default About