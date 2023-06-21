import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {
    title: string;
    description: string;
    stack: string;
    link: string;
    photo: string;
    website: string;
}

function Project({title, description, stack, link, photo, website}: Props) {
  return (
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className='w-screen flex flex-col
   items-center justify-center p-6 md:p-10 h-screen  text-gray-100'
>
  <a href={website}>
    <motion.img
      initial={{ y: -300, opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      src={photo}
      alt={title}
      className='h-44 w-44 md:h-[50vh] md:w-[50vh] border rounded-md border-gray-500 object-cover'
    />
  </a>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className='bg-midnightblue rounded-lg shadow-lg w-full max-w-4xl mt-10'
  >
    <div className='p-8 md:p-12'>
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-lg lg:text-3xl font-semibold text-center mb-12 sm:text-left'
      >
        <span className='border-b-4 border-blue-500 pb-2'>{title}</span>
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.6 }}
        className='text-sm md:text-base text-center md:text-left mb-6'
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=' text-center font-semibold mb-8 sm:text-left text-sm md:text-lg'
      >
        <span className='text-lg md:text-2xl'>Tech Stack:</span> {stack}
      </motion.div>
      <motion.a
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md text-center w-full text-sm md:text-base'
        href={link}
      >
        Github
      </motion.a>
    </div>
  </motion.div>
</motion.div>
);
};


export default Project