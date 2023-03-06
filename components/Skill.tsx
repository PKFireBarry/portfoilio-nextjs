import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
  Icon: string;
  Item: string;
};

function Skill({directionLeft, Icon, Item}: Props) {
  return (
    <div className='group relative flex cursor-pointer pt-4'>
    <motion.img
    viewport={{ once: true }}
    initial={{ x: directionLeft ?  -250 : 250,
    opacity: 0 
            }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, x: 0 }}
    src={Icon} alt={Item} className='h-12 w-12 md:h-24 md:w-24 border rounded-full border-gray-500 object-cover xl:h-28 xl:w-28'/>


    {/*name of the logo*/}
    
      <div className=''>
        <h3 className=' pb-8 text-black text-md font-bold uppercase tracking-[3px]'>{Item}</h3>
      </div>
    </div>
  )
}

export default Skill