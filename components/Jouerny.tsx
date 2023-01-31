import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



type Props = {}

function Jouerny({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
    items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] 
                     text-gray-500
                       text-2xl pt-4'>My Jounery</h3>

        <div className='flex absolute'>

        </div>
    </div>
  )
}

export default Jouerny