import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import AboutPic from './rock.jpg'


type Props = {}

function About({}: Props) {
  return (
<div className="h-screen w-screen flex justify-center">
  <div className=" items-center bg-purple-500">
 
    <div className="mt-20 flex justify-center items-center w-screen  bg-green-500">
      <h3 className="text-3xl md:text-5xl font-bold font-sans mb-4 text-black">
        About Me
      </h3>
    </div>

    <div className="flex flex-col md:flex-row h-1/3 md:h-[80%] items-center justify-start  mx-auto py-16 bg-rose-500">
      <div className=" h-[80%]  bg-purple-500 m-8">
        <Image
          src={AboutPic}
          alt="About Picture"
          className=" rounded-lg object-cover h-full w-full resize"
        />
      </div>

      <div className="flex flex-wrap flex-col items-center md:items-start md:w-1/2 px-4 md:px-10 md:py-0">
        <p className="text-sm md:text-md lg:text-xl text-black leading-loose mb-8">
          I am a full stack JavaScript developer with a focus on front end
          frameworks including React and Next.js. I have a passion for creating
          visually appealing and user-friendly websites and applications that
          leave a lasting impression. My experience in HTML, CSS, and
          JavaScript, as well as my ability to develop responsive and
          interactive interfaces using modern frameworks, make me a valuable
          asset to any team.
        </p>
        <ul className="list-disc list-inside text-sm md:text-md lg:text-xl  text-black mb-8">
          <li>
            Completed Harvards CS50X course taught by David Malan in 2022
            reigniting a passion for software development
          </li>
          <li>Proficient in React and Next.js</li>
          <li>
            Experience with responsive design and cross-browser compatibility
          </li>
          <li>Passionate about creating sleek and modern designs</li>
          <li>
            Dedicated to staying up-to-date with the latest web development
            trends and technologies
          </li>
        </ul>
        <p className="md:text-md lg:text-xl text-black leading-loose mb-8">
          My ultimate goal is to make a positive impact in the field of web
          development, to be a part of something greater than myself, and to
          bring value to a team while pursuing my dream. I am currently seeking
          new opportunities to apply my skills and expertise in a challenging
          and dynamic environment.
        </p>
      </div>
    </div>

    <div className="flex justify-center bg-amber-400">
      <a
        href="https://github.com/PKFireBarry"
        className=" hover:bg-blue-700  font-bold rounded-6xl bg-midnightblue box-border w-[182px] h-[42px] flex flex-row py-[11.006370544433594px] px-[31.184715270996094px] items-center justify-center text-[16.51px] text-white border-[1.8px] border-solid border-color-text-dark "
      >
        View my work
      </a>
    </div>
  </div>
</div>
  )
}

export default About