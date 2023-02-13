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

<div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 sm:p-24 min-h-screen min-w-fit h-screen'>
    <a
    className=''
    href={website}
    >
      <motion.img
      initial={{y: -300, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 1}}
      viewport={{ once: true }}
      src={photo}
      alt={title}
      className='h-48 w-48 md:h-96 md:w-96 border rounded-md border-gray-500 object-cover xl:h-96 xl:w-96'
      />
    </a>
    <div className='space-y-10 px-0 md:px-10 max-w-4xl'>
        <h3 className='text-3xl font-semibold text-center'>
            <span className='underline '>Project: {title}</span>

        </h3>

        <p className='text-lg text-center md:text-left'>{description}</p>
        <div className='text-md text-center md:text-left  mx-auto font-semibold pb-8'>{stack}</div>
        <a className='text-md text-center md:text-left mx-auto hover:text-blue-500 hover:cursor-pointer font-semibold' href={link}>Github</a>
    </div>
</div>

  )
}

export default Project