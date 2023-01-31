import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'


type Props = {}

function Header({}: Props) {
return (
    <header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center
    p-5'>

        <motion.div
        initial={{ 
            opacity: 0,
            x: -500,
            scale: 0.5,
        }}
        animate={{
            opacity: 1,
            x: 0,
            scale: 1,
        }}
        transition={{
            duration: 2,
            delay: 0.5,
            type: 'spring',
            stiffness: 120,
        }}
        className='flex flex-row items-center'>
            {/* icons */}
            <SocialIcon url="https://www.linkedin.com/in/darion-george/" 
            fgColor='gray' 
            bgColor='transparent' 
            />
            <SocialIcon url="https://github.com/PKFireBarry" 
            fgColor='gray' 
            bgColor='transparent' 
            />
            <SocialIcon url="https://open.spotify.com/artist/2P5bs8S76CjmQ4aKGoCVe2" 
            fgColor='gray' 
            bgColor='transparent' 
            />
        </motion.div>
        <Link href="#contact">
        <motion.div
        initial={{
            opacity: 0,
            x: 500,
            scale: 0.5,
        }}
        animate={{
            opacity: 1,
            x: 0,
            scale: 1,
        }}
        transition={{
            duration: 2,
            delay: 0.5,
            type: 'spring',
            stiffness: 120,
        }}
        className='flex flex-row items-center text-gray-500 cursor-pointer'>
            <SocialIcon className='cursor-pointer' 
            network='email' 
            fgColor='gray' 
            bgColor='transparent' 
            />
            <p className='uppercase hidden md:inline-flex text-sm text-grey-400'>Wanna Contact Me?</p>
        </motion.div>
        </Link>
    </header>
        )
}

export default Header