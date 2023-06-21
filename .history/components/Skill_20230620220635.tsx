import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
  Icon: string;
  Item: string;
  Description: string;
};

function Skill({ directionLeft, Icon, Item, Description }: Props) {
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
      className='flex flex-col items-center justify-center bg-black rounded-lg p-4 m-2'
    >
      <img src={Icon} alt="" className='h-8 w-8 hover:h-12 hover:w-12 duration-1000'/>
      <h4 className='text-white  text-lg mb-2'>{Item}</h4>
      <p className='text-white text-sm text-center'>{Description}</p>
    </motion.div>
  );
}

export default Skill;