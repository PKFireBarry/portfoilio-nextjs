import React from 'react'
import { motion } from 'framer-motion'


function BackgroundEffect() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ scale: [1,1.25,1.5,1.25,1],
    opacity: [1,1,1,1,1] }}
    transition={{ duration:10, repeat: Infinity,
    repeatDelay: 5 }}
    className='relative flex justify-center items-center '>
        <div className='border border-black mt-52 animate-ping 
        rounded-full h-[200px] w-[200px] absolute'/>
        <div className='border border-black mt-52 animate-ping 
        rounded-full h-[300px] w-[300px] absolute'/>
        <div className='border border-black mt-52 animate-ping 
        rounded-full h-[400px] w-[400px] absolute'/>
        <div className='border-4 border-black mt-52
        rounded-full h-[500px] w-[500px] absolute opacity-5'/>
        <div className='border-4 border-black mt-52 rounded-full h-[800px] w-[800px] absolute'/>
    </motion.div>

  )
}

export default BackgroundEffect