import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundEffect from './BackgroundEffect';
import Image from 'next/image';
import Profilepic from './desert .jpg';





type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['<Hi, Im Darion George a Frontend Engineer!/>', 
                '<Hey! Thanks For Checking Out My Portfoilio! />',
                '<I Love Building Things With Code>',
                '<You can check out my work below/>',
                '<Feel free to get in touch/>',
                '<All your base are belong to us/>',
                '<.............................../>',
                '{/*I also write music under the name Deep Voyage*/}',
                '<Thanks for stopping by!/>',
                '<Have a great day!/>'
            ],
        loop: true,
        delaySpeed: 3500,
    });
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
            <BackgroundEffect />
            <Image className='relative rounded-full h-[200px] w-[200px] mx-auto object-cover'
            src={Profilepic}
            alt='profilePic'
            />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-200 pb-4 
            tracking-[12px]'>Web Developer</h2>
            <h1 className='text-3xl lg:text-4xl font-semibold px-10'>
                <span className='mr-3 pt-4'>{text}</span>
                <Cursor cursorColor='white' />
            </h1>
            <div>
                <a href='#about'><button className='heroButton'>About</button></a>
                <a href='#skills'><button className='heroButton'>Skills</button></a>
                <a href='#projects'><button className='heroButton'>Projects</button></a>
            </div>
        </div>
    </div>
  )
}

export default Hero