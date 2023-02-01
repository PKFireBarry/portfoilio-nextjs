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
            <Project title='News Aggregation App' description='A news aggregation platform that allows users to browse and search for articles from multiple sources(powered by NewsAPI). My goal is to make it easy for users to stay up-to-date with the latest news and information from a wide range of sources. My Web app is designed to be user-friendly and easy to navigate, with a clean and modern interface that allows users to quickly find the articles they are interested in on mobile or desktop effectively.' stack='Python, Flask, NewsAPI, HTML' link='https://github.com/PKFireBarry/News-Aggregation-App' photo='https://i.ibb.co/Jpgjqj5/news-app.png' />



        </div>

        <div className='absolute w-full top-[30%] bg-blue-300 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects