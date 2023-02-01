import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Image from 'next/image'


type Props = {}

function Skills({}: Props) {

{/* logo cdns */}
const reactjs = 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
const JS = 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'
const html = 'https://cdn.worldvectorlogo.com/logos/html-1.svg'
const css = 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
const nodejs = 'https://cdn.worldvectorlogo.com/logos/nodejs-2.svg'
const vscode = 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg'
const nextjs = 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
const jquery = 'https://cdn.worldvectorlogo.com/logos/jquery-4.svg'
const python = 'https://cdn.worldvectorlogo.com/logos/python-5.svg'
const tailwind = 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
const git = 'https://cdn.worldvectorlogo.com/logos/git-icon.svg'
const bootstrap = 'https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg'
const muicss = 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg'
const framer = 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg'
const firebase = 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'
const postgresql = 'https://cdn.worldvectorlogo.com/logos/postgresql.svg'

  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen min-w-fit flex relative flex-col text-center 
    md:text-left xl:flex-row px-10 justify-evenly mx-auto 
    items-center max-w-[2000px] min-h-screen xl:space-y-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] 
text-gray-500 text-2xl pt-4'>Skills</h3>
        <h3 className=' absolute font-semibold top-36 sm:top-28 uppercase tracking-[3px] text-gray-100 pt-10'>Here is a Grid of some of the technologies I have recently been working with:</h3>
        <div className='absolute sm:min-h-max grid grid-cols-2 gap-10 md:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3'>
            <Skill Icon={ vscode } Item="VSCode"/>
            <Skill Icon={ git } Item="Git"/>        
            <Skill Icon={ html } Item="HTML" />
            <Skill Icon={ css } Item="CSS"/>   
            <Skill Icon={ JS } Item="JS"/> 
            <Skill Icon={ python } Item="Python"/>   
            <Skill Icon={ nodejs } Item="NodeJS"/> 
            <Skill Icon={ postgresql } Item="PostgreSQL"/>  
            <Skill Icon={ firebase } Item="Firebase"/>
            <Skill Icon={ reactjs } Item="React"/>    
            <Skill Icon={ nextjs } Item="NextJS"/>    
            <Skill Icon={ tailwind } Item="Tailwind"/> 
            <Skill Icon={ bootstrap } Item="Bootstrap"/>
            <Skill Icon={ framer } Item="Framer Motion"/>         
            <Skill Icon={ muicss } Item="Material-Ui"/>
            <Skill Icon={ jquery } Item="JQuery"/>  
        </div>
    </motion.div>
  )
}



export default Skills