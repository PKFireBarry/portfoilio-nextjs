import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutPic from './rock.jpg'


type Props = {}

function About({}: Props) {
  return (<>    <div className='flex justify-center text-center'>        
  <h3 className='uppercase pt-44 tracking-[20px] text-gray-500 text-lg md:text-2xl'>About</h3>
</div>

<div className='flex flex-col md:flex-row items-center justify-center md:justify-start max-w-7xl mx-auto min-h-screen'>
  <div className='relative h-5 w-5 sm:h-56 md:h-full md:w-1/2 xl:w-[550px] xl:h-[550px]'>
    <Image
      src={AboutPic}
      alt='About Picture'
      className='rounded-full items-center md:rounded-md object-cover hidden md:block p-1 lg:rounded-xl'
    />
  </div>

  <div className='flex flex-col items-center md:items-start md:w-1/2 px-6 md:px-10 py-10 md:py-0'>
    <h3 className='text-3xl md:text-5xl font-bold font-sans mb-4'>About Me</h3>
    <p className='text-sm md:text-lg text-gray-500 mb-6'>I am a full stack JavaScript developer with a focus on front end frameworks including React and Next.js. I have a passion for creating visually appealing and user-friendly websites and applications that leave a lasting impression. My experience in HTML, CSS, and JavaScript, as well as my ability to develop responsive and interactive interfaces using modern frameworks, make me a valuable asset to any team.</p>
    <ul className='list-disc list-inside text-sm md:text-base text-gray-500 mb-8'>
      <li>Completed Harvards CS50X course taught by David Malan in 2022 reigniting a passion for software development</li>
      <li>Proficient in React and Next.js</li>
      <li>Experience with responsive design and cross-browser compatibility</li>
      <li>Passionate about creating sleek and modern designs</li>
      <li>Dedicated to staying up-to-date with the latest web development trends and technologies</li>
    </ul>
    <p className='text-sm md:text-lg text-gray-500 mb-8'>My ultimate goal is to make a positive impact in the field of web development, to be a part of something greater than myself, and to bring value to a team while pursuing my dream. I am currently seeking new opportunities to apply my skills and expertise in a challenging and dynamic environment.</p>
    <a href='#' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>View my work</a>
  </div>
</div>
  </>

  )
}

export default About