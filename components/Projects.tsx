import React from 'react'
import { motion } from 'framer-motion'
import Project from './Project'



type Props = {}

function Projects({}: Props) {

  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration: 1}}
    className='h-screen relative flex overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 '>
        <h3 className='absolute top-24 uppercase tracking-[20px]  text-gray-500 text-2xl pt-4'>Projects</h3>


        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
        snap-mandatory z-20 scrollbar-track-blue-500/20 scrollbar-thumb-black scrollbar-thin'>
            <Project title='Linkedin Front-End Clone' description='This is an intricately designed front-end replica of a LinkedIn profile page, crafted using the latest React technology and incorporating libraries such as Material-UI. The page features a sleek layout and design that seamlessly mimics the look and feel of the original LinkedIn profile page. The inclusion of functionality such as posting represented by visually appealing icons, adds an extra touch of authenticity to the project. The component structure, while sophisticated in its design, is intuitively organized and easily customizable.' stack='React, MUI, JS, HTML, Tailwind' link='https://github.com/PKFireBarry/Linkedin-Profile-Page-Clone' photo='https://i.ibb.co/10n380w/Linkedin-clone.png'/>
            <Project title='News Aggregation App' description='This platform is designed with the user in mind, offering a clean, modern, and user-friendly interface that allows users to quickly find the articles they are interested in, regardless of the device they are using. The platform has been built to scale seamlessly from mobile to desktop, ensuring that users can enjoy a consistent and optimized experience, no matter how they access the platform.' stack='React, Nextjs, Typescript, TailwindCSS, Stepzen, Mediastack-API, Graphql' link='https://github.com/PKFireBarry/news-app-rework' photo='https://i.ibb.co/JxLCLgN/Screenshot-from-2023-02-02-07-05-57.png' />



        </div>

        <div className='absolute w-full top-[30%] bg-blue-300 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects