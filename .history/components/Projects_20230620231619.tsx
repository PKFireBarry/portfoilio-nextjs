import React from 'react'
import { motion } from 'framer-motion'
import Project from './Project'



type Props = {}

// data structure for projects information
const projects = [
  {
    title:  'swakabilly-chat',
    description: "This is a real-time chat app that utilizes Firebase as its platform. Users can log in to the app to gain authorization to chat, create or join chat rooms, and send messages to all participants in the chat. The app is fully responsive and features great styling. It uses several packages such as framer-motion, react-firebase-hooks, react-toastify, and universal-cookie to provide dynamic UI transitions, integrate Firebase services into React components, and handle browser cookies.",
    stack: "React, Tailwind, Framer, Firebase, Toastify",
    link: "https://github.com/PKFireBarry/swakabilly-chat",
    photo: "https://i.ibb.co/zXXXMWF/Screenshot-from-2023-03-09-09-21-16.png",
    website: "https://swakabilly-chat.vercel.app/"
  },
  {
    title: "A Really Cool Blog App",
    description: "This blog site was built using Next.js 13 and offers a modern and cutting-edge experience. The build showcases the use of dynamic and static data handling, preview mode with Sanity.io, a fully responsive design using Tailwind CSS, server and client components, the new app folder structure, dynamic page routing, GROQ query language, Sanity studio integration with authentication, TypeScript for error reduction, and deployment on Vercel.",
    link: "https://github.com/PKFireBarry/nextjs-blog",
    stack: "React, Nextjs, Typescript, TailwindCSS, SanityV3",
    photo: "https://i.ibb.co/2hvRDGV/Screen-Shot-2023-02-07-at-5-48-34-AM.png",
    website: "https://a-really-cool-blog.vercel.app/"
  },
  {
    title: "News Aggregation App",
    description: "This platform is designed with the user in mind, offering a clean, modern, and user-friendly interface that allows users to quickly find the articles they are interested in, regardless of the device they are using. The platform has been built to scale seamlessly from mobile to desktop, ensuring that users can enjoy a consistent and optimized experience, no matter how they access the platform.",
    stack: "React, Nextjs, Typescript, TailwindCSS, HTML, Stepzen, Mediastack-API, Graphql",
    link: "https://github.com/PKFireBarry/news-app-rework",
    photo: "https://i.ibb.co/JxLCLgN/Screenshot-from-2023-02-02-07-05-57.png",
    website: "https://news-aggregation-app.vercel.app/"
  },
  {
    title: 'ChatGPT+ Messenger',
    description: 'Enhance your conversational AI experience with my upgraded version of the ChatGPTv3 user client from OpenAI. With a custom API integrated to fetch responses to your queries and store them in a database hosted on Google Firebase, this platform provides a streamlined and efficient solution. I have also added a feature that allows users to select their desired AI model before sending a prompt, providing greater control over the conversational experience.',
    stack: 'React, Next.js, Typescript, TailwindCSS, HTML, Firebase, OpenAI API',
    link: 'https://github.com/PKFireBarry/ChatGPT-Messenger',
    photo: 'https://i.ibb.co/KKvBv8G/Screenshot-from-2023-02-10-12-07-07.png',
    website: 'https://chatgpt-messenger-plus.vercel.app/',
  },
  {
    title: 'Linkedin Front-End Clone',
    description: 'This is an intricately designed front-end replica of a LinkedIn profile page, crafted using the latest React technology and incorporating libraries such as Material-UI. The page features a sleek layout and design that seamlessly mimics the look and feel of the original LinkedIn profile page. The inclusion of functionality such as posting represented by visually appealing icons, adds an extra touch of authenticity to the project. The component structure, while sophisticated in its design, is intuitively organized and easily customizable.',
    stack: 'React, MUI, JS, HTML, Tailwind',
    link: 'https://github.com/PKFireBarry/Linkedin-Profile-Page-Clone',
    photo: 'https://i.ibb.co/10n380w/Linkedin-clone.png',
    website: 'https://pkfirebarry.github.io/Linkedin-Profile-Page-Clone/',
  },
  {
    title: 'A Sticky Notes App',
    description: 'This is a simple note taking app that allows users to create, edit, and delete notes. The app features a responsive design, a customizable toolbar, and a customizable text editor. The app is built using TypeScript, React, and Tailwind CSS.',
    stack: 'React, Typescript, TailwindCSS, HTML',
    link: 'https://github.com/PKFireBarry/Sticky-Notes-App',
    photo: 'https://i.ibb.co/Hxy9s2r/Screenshot-from-2023-02-21-17-43-56.png',
    website: 'https://pkfirebarry.github.io/Sticky-Notes-App/',
  },
  {
    title: 'AI Cover Letter Writer',
    description: 'An AI Cover Letter Writer, the ultimate solution for job seekers looking to land their dream job. Uses cutting-edge AI and NLP technologies to generate personalized cover letters that match the job requirements, saving you time and increasing your chances of success. Say goodbye to the stress and frustration of writing cover letters and hello to a streamlined and professional approach. Invest in your future and try the AI Cover Letter Writer.',
    stack: 'eslint, reactjs, nextjs, particles, openai, firebase-auth, firebase-database, tailwindcss, universal-cookie, framer-motion, react-hot-toast',
    link: 'https://github.com/PKFireBarry/AI-Cover-Letter-Writer',
    photo: 'https://i.ibb.co/mcfHytm/Screenshot-from-2023-04-10-02-00-14.png',
    website: 'https://ai-cover-letter-writer.vercel.app/',
  }
]


function Projects({}: Props) {

  return (
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="relative flex flex-col overflow-hidden text-left max-w-full justify-center items-center">
  <h3 className="top-24 hidden md:block uppercase tracking-[20px] text-gray-500 text-2xl pt-8 text-center">
    Projects
  </h3>
  <div className="z-20 bg-green-500">
    <Project
      title={projects[1].title}
      description={projects[1].description}
      link={projects[1].link}
      photo={projects[1].photo}
      website={projects[1].website}
      stack={projects[1].stack}
      
    />
    <Project
      title={projects[3].title}
      description={projects[3].description}
      link={projects[3].link}
      photo={projects[3].photo}
      website={projects[3].website}
      stack={projects[3].stack}
      
    />
    <Project
        title={projects[6].title}
        description={projects[6].description}
        link={projects[6].link}
        photo={projects[6].photo}
        website={projects[6].website}
        stack={projects[6].stack}
    />
  </div>
</motion.div>
  )
}

export default Projects