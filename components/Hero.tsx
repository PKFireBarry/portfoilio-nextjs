import React, { Suspense } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundEffect from './BackgroundEffect';
import Image from 'next/image';
import Profilepic from './desert .jpg';
import Button from './Button';
import { motion } from 'framer-motion';



const sections = ['About','Skills','Projects','Journey','Contact',]


type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            '<Hi, Im Darion George a Frontend Engineer!/>', 
            '<Hey! Thanks For Checking Out My Portfoilio! />',
            '<I Love Building Things With Code>',
            '<You can check out my work below/>',
            'With great power comes great electricity bill trust me bro...',
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

<motion.div
whileHover={{ scale: 1.5}} 

 className='sm:bottom-28 relative bg-[#031463] rounded-[50%] shadow-[0px_0px_50px_rgba(0,_0,_0,_0.8)] w-[210px] h-[210px] sm:w-[390px] sm:h-[390px] flex justify-center items-center text-center'>
    <Image className='rounded-full mx-auto transform w-[200px] h-[200px] sm:w-[374px] sm:h-[374px] object-cover' src={Profilepic} alt='profilePic' />    
</motion.div>

    <h2

    className=' z-20 flex items-center p-8 justify-center h-[75px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white bg-[#031463] rounded-xl font-fira-code border-[4px] border-solid border-black shadow-[0px_0px_50px_rgba(0,_0,_0,_0.8)]'>Web Developer</h2> 
    
<motion.div
          whileHover={{ scale: 1.2,}} 
 className='z-20'>
    <div className='hidden sm:flex items-center justify-center shadow-[0px_0px_50px_rgba(0,_0,_0,_0.8)] rounded-xl'>
        <h1 className='p-4 rounded-xl text-center lg:text-4xl font-semibold bg-ghostwhite text-[#031463] text-5xl font-fira-code border-[4px] border-solid border-[#031463]'>
            <span className='mr-3 pt-4 text-lg md:text-2xl lg:text-3xl'>{text}</span>
            <Cursor cursorColor='black' />
        </h1>        
    </div>
</motion.div>

    <div className='flex flex-wrap justify-around mt-4'>
        <Button section={sections[0]}/>
        <Button section={sections[1]}/>
        <Button section={sections[2]}/>
        <Button section={sections[3]}/>
        <Button section={sections[4]}/>
    </div>
</div>
  )
}

export default Hero