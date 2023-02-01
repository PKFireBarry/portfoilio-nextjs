import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutPic from './rock.jpg'


type Props = {}

function About({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center 
                    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
                    items-center min-h-screen min-w-fit'>
        <h3 className='absolute top-24 uppercase tracking-[20px] 
                     text-gray-500
                       text-2xl pt-4 inline-block'>about</h3>
        <Image
        src={AboutPic}
        alt='About Picture'
        className='relative rounded-full h-50 w-50 sm:h-56 w-56 mx-auto object-cover mb-20 md:mb-10 flex-shrink-0 md:rounded-lg md:h-128 md:w-128 xl:w-[400px] xl:h-[400px]'/>

        <div className='space-y-10 px-0 md:px-10'>
            <h3 className='text-4xl font-semibold'>A <span className='text-2xl underline'>little</span> bit about me</h3>
            <p className='text-md text-base'>I am a driven web developer based in Tampa, with a passion for creating visually appealing and user-friendly websites and applications that leave a lasting impression. My experience in HTML, CSS, and JavaScript, as well as my ability to develop responsive and interactive interfaces using modern frameworks, make me a valuable asset to any team.
            Coding has been a transformative experience for me, particularly after completing Harvard&#39;s CS50X course taught by David Malan in 2022. The course ignited a spark within me, and since then I have dedicated myself to honing my skills and building production-level code. My ultimate goal is to make a positive impact in the field of web development, to be a part of something greater than myself, and to bring value to a team while pursuing my dream.</p>

        </div>
    </div>
  )
}

export default About