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
      className='flex flex-col items-center justify-center bg-gray-100 rounded-lg p-4 m-2'
    >
      <img src={Icon} alt="" className='h-8 w-8'/>
      <h4 className='text-gray-700  font-medium mb-2'>{Item}</h4>
      <p className='text-gray-500 text-sm text-center'>{Description}</p>
    </motion.div>
  );
}

export default Skill;