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

            <Project title='swakabilly-chat' description='
            This is a real-time chat app that utilizes Firebase as its platform. Users can log in to the app to gain authorization to chat, create or join chat rooms, and send messages to all participants in the chat. The app is fully responsive and features great styling. It uses several packages such as framer-motion, react-firebase-hooks, react-toastify, and universal-cookie to provide dynamic UI transitions, integrate Firebase services into React components, and handle browser cookies.' stack='React, Tailwind, Framer, Firebase, Toastify' link='https://github.com/PKFireBarry/swakabilly-chat' photo='https://i.ibb.co/zXXXMWF/Screenshot-from-2023-03-09-09-21-16.png' website='https://swakabilly-chat.vercel.app/'/>

            <Project title='A Really Cool Blog App' description='This blog site was built using Next.js 13 and offers a modern and cutting-edge experience. The build showcases the use of dynamic and static data handling, preview mode with Sanity.io, a fully responsive design using Tailwind CSS, server and client components, the new app folder structure, dynamic page routing, GROQ query language, Sanity studio integration with authentication, TypeScript for error reduction, and deployment on Vercel.' link='https://github.com/PKFireBarry/nextjs-blog' stack='React, Nextjs, Typescript, TailwindCSS, SanityV3' photo='https://i.ibb.co/2hvRDGV/Screen-Shot-2023-02-07-at-5-48-34-AM.png' website='https://a-really-cool-blog.vercel.app/'/>
            <Project title='News Aggregation App' description='This platform is designed with the user in mind, offering a clean, modern, and user-friendly interface that allows users to quickly find the articles they are interested in, regardless of the device they are using. The platform has been built to scale seamlessly from mobile to desktop, ensuring that users can enjoy a consistent and optimized experience, no matter how they access the platform.' stack='React, Nextjs, Typescript, TailwindCSS, HTML, Stepzen, Mediastack-API, Graphql' link='https://github.com/PKFireBarry/news-app-rework' photo='https://i.ibb.co/JxLCLgN/Screenshot-from-2023-02-02-07-05-57.png' website='https://news-aggregation-app.vercel.app/'/>
            <Project title='ChatGPT+ Messenger' description='Enhance your conversational AI experience with my upgraded version of the ChatGPTv3 user client from OpenAI. With a custom API integrated to fetch responses to your queries and store them in a database hosted on Google Firebase, this platform provides a streamlined and efficient solution. I have also added a feature that allows users to select their desired AI model before sending a prompt, providing greater control over the conversational experience.' stack='React, Nextjs, Typescript, TailwindCSS, HTML, Firebase, OpenAI API' link='https://github.com/PKFireBarry/ChatGPT-Messenger' photo='https://i.ibb.co/KKvBv8G/Screenshot-from-2023-02-10-12-07-07.png' website='https://chatgpt-messenger-plus.vercel.app/'/>            
            <Project title='Linkedin Front-End Clone' description='This is an intricately designed front-end replica of a LinkedIn profile page, crafted using the latest React technology and incorporating libraries such as Material-UI. The page features a sleek layout and design that seamlessly mimics the look and feel of the original LinkedIn profile page. The inclusion of functionality such as posting represented by visually appealing icons, adds an extra touch of authenticity to the project. The component structure, while sophisticated in its design, is intuitively organized and easily customizable.' stack='React, MUI, JS, HTML, Tailwind' link='https://github.com/PKFireBarry/Linkedin-Profile-Page-Clone' photo='https://i.ibb.co/10n380w/Linkedin-clone.png' website='https://pkfirebarry.github.io/Linkedin-Profile-Page-Clone/'/>
            <Project title='A Sticky Note App' description='This is a web app built with React and Tailwind CSS that allows users to create, delete, and search notes. Keep track of your thoughts and TO-DOs with this simple and clean web app that saves your notes on a firebase database for persistent storage. Its fully responsive a can be used on all devices(mobile or desktop)' stack='React, Tailwind, Typescript, Firebase' link='https://github.com/PKFireBarry/notes-app' photo='https://i.ibb.co/Hxy9s2r/Screenshot-from-2023-02-21-17-43-56.png' website='https://a-sticky-notes-app.vercel.app/'/>




        </div>

        <div className='absolute w-full top-[30%] bg-sky-300 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects