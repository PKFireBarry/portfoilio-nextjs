import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
type Props = {

  Icon: string;
  Item: string;
  Description: string;
};

function Skill({ Icon, Item, Description }: Props) {

const x = useMotionValue(200)
const y = useMotionValue(200)

const rotateX = useTransform(y, [0, 400], [45, -45])
const rotateY = useTransform(x, [0, 400], [-45, 45])

function handleMouse(event: { pageX: number; pageY: number }) {
    x.set(event.pageX)
    y.set(event.pageY)
}


// function to generarate a random number

function getRandomNumber() {
  return Math.random() * 1.5;
}

function getRandomXY() {
  return {
    x: Math.random() * -100,
    y: Math.random() * -100
  }

}
const randomNumber = getRandomNumber();
const randomXY = getRandomXY();

  return (
    <motion.div
      initial={{ opacity: 0, y: randomXY.y, x: randomXY.x}}
      transition={{ duration: randomNumber }}
      whileInView={ { opacity: 1, y: 0, x: 0 }  }
      drag
      className='flex flex-col items-center justify-center p-4 m-2 text-black bg-ghostwhite rounded-xl font-fira-code border-[4px] border-solid border-[#031463] shadow-[0px_0px_15px_rgba(0,_0,_0,_0.8)]'
    >
      <motion.div
        onMouseMove={handleMouse}
  style={{rotateX: rotateX, rotateY: rotateY, perspective: 400,}}
      >
      <Image 
      width={1000}
      height={1000}
      src={Icon} alt="" className='h-8 w-8 hover:h-12 hover:w-12 duration-1000'/>        
      </motion.div>

      <h4 className='  text-lg xl:text-3xl mb-2'>{Item}</h4>
      <p className=' italic hidden lg:block md:text-sm lg:text-sm xl:text-md text-center'>{Description}</p>
    </motion.div>
  );
}

export default Skill;