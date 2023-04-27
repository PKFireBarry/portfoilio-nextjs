import React, { Suspense } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundEffect from './BackgroundEffect';
import Image from 'next/image';
import Profilepic from './desert .jpg';
import { Canvas } from '@react-three/fiber';
import { Box, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';





type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '<Hi, Im Darion George a Frontend Engineer!/>', 
            '<Hey! Thanks For Checking Out My Portfoilio! />',
            '<I Love Building Things With Code>',
            '<You can check out my work below/>',
            '<Feel free to get in touch/>',
            '<All your base are belong to us/>',
            '<.............................../>',
            '{/*I also write music under the name Deep Voyage*/}',
            '<Thanks for stopping by!/>',
            '<Have a great day!/>',
            '<I\'m always learning new things about JavaScript>',
            '<Next.js is my favorite JavaScript framework>',
            '<The benefits of using TypeScript with JavaScript are many>',
            '<I love attending tech meetups and events to connect with other JavaScript developers>',
            '<I have experience using popular JavaScript libraries like jQuery>',
            '<JavaScript is such a versatile language that can be used for both frontend and backend development>'
        ],
        loop: true,
        delaySpeed: 3500,
    });
    
    
  return (
<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
<BackgroundEffect />
<Image className='relative bottom-5 rounded-full h-[200px] w-[200px] mx-auto object-cover'
    src={Profilepic}
    alt='profilePic'
/>
<div className='z-20'>
    <h2 className='text-sm uppercase text-gray-200 pb-4 tracking-[12px] font-medium'>Web Developer</h2>
    <h1 className='text-3xl lg:text-4xl font-semibold px-10 text-white'>
        <span className='mr-3 pt-4'>{text}</span>
        <Cursor cursorColor='white' />
    </h1>
    <div className='flex flex-wrap justify-evenly gap-6 mt-12'>
        <a href='#about'><button className='heroButton bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-2'>About</button></a>
        <a href='#skills'><button className='heroButton bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-2'>Skills</button></a>
        <a href='#projects'><button className='heroButton bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-2'>Projects</button></a>
        <a href='#contact'><button className='heroButton bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 m-2'>Contact</button></a>
        
    </div>
</div>
</div>
  )
}

export default Hero