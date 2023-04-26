import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutPic from './rock.jpg'


type Props = {}

function About({}: Props) {
  return (
<div className='h-screen flex relative flex-col text-center 
                    md:text-left md:flex-row max-w-7xl px-10 mx-auto 
                    items-center min-h-screen min-w-fit'>
        <h3 className='absolute top-24 uppercase tracking-[20px] 
                     text-gray-500
                       text-lg md:text-2xl pt-4 inline-block'>about</h3>
        <Image
        src={AboutPic}
        alt='About Picture'
        className='relative rounded-full h-40 w-40 sm:h-56  mx-auto object-cover mb-10 md:mb-0 flex-shrink-0 md:rounded-lg md:h-128 md:w-128 xl:w-[400px] xl:h-[400px] md:opacity-100 opacity-0'/>
        
        <div className='space-y-6 px-0 md:px-10 md:pl-20'>
            <h3 className='text-2xl md:text-4xl font-bold font-sans'>A <span className='text-lg md:text-2xl underline font-serif'>little</span> bit about me</h3>
            <p className='text-sm md:text-base'>I am a driven web developer based in Tampa, with a passion for creating visually appealing and user-friendly websites and applications that leave a lasting impression. My experience in HTML, CSS, and JavaScript, as well as my ability to develop responsive and interactive interfaces using modern frameworks, make me a valuable asset to any team.</p>
            <ul className='list-disc list-inside mb-4 md:mb-6'>
                <li className='text-sm md:text-base'>Completed Harvards CS50X course taught by David Malan in 2022</li>
                <li className='text-sm md:text-base'>Proficient in React and Next.js</li>
                <li className='text-sm md:text-base'>Experience with responsive design and cross-browser compatibility</li>
            </ul>
            <p className='text-sm md:text-base pb-8'>My ultimate goal is to make a positive impact in the field of web development, to be a part of something greater than myself, and to bring value to a team while pursuing my dream.</p>
            <a href='#' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-0 md:opacity-100 '>View my work</a>
        </div>
    </div>
  )
}

export default About