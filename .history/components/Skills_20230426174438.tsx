import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import Image from 'next/image'


type Props = {

}



function Skills({}: Props) {

function getRandomNumber() {
  return Math.random() * 2.5;
}

function getRandomXY() {
  return {
    x: Math.random() * 75,
    y: Math.random() * -100
  }

}

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
  transition={{ duration: getRandomNumber()  }}
  viewport={{ once: true }}
  className='flex flex-col mx-auto text-center justify-center px-10 w-screen h-screen overflow-hidden '>
  <h3 className=' top-24 uppercase tracking-[20px]  text-gray-500 text-2xl pt-4'>Skills</h3>
  <h3 className='font-semibold text-xs uppercase tracking-[2px] text-gray-100 pt-8 pb-2'>Here are some of the technologies I have recently been working with:</h3>
  <div className='hidden flex-wrap overflow-auto justify-center mt-4 md:flex'>
    <Skill Icon={vscode} Item='VSCode' Description='A powerful code editor' className='mx-4' />
    <Skill Icon={git} Item='Git' Description='A distributed version control system' className='mx-4' />
    <Skill Icon={html} Item='HTML' Description='The standard markup language for web pages' className='mx-4' />
    <Skill Icon={css} Item='CSS' Description='A stylesheet language used to describe the presentation of a document written in HTML' className='mx-4' />
    <Skill Icon={JS} Item='JS' Description='A high-level programming language used to create interactive websites' className='mx-4' />
    <Skill Icon={python} Item='Python' Description='A popular programming language used for web development, data analysis, and artificial intelligence'  />
    <Skill Icon={nodejs} Item='NodeJS' Description='A JavaScript runtime built on Chromes V8 JavaScript engine' className='mx-4' />
    <Skill Icon={postgresql} Item='PostgreSQL' Description='A powerful, open source object-relational database system' className='mx-4' />
    <Skill Icon={firebase} Item='Firebase' Description='A mobile and web application development platform' className='mx-4' />
    <Skill Icon={reactjs} Item='React' Description='A JavaScript library for building user interfaces' className='mx-4' />
    <Skill Icon={nextjs} Item='NextJS' Description='A framework for building server-side rendered React applications' className='mx-4' />
    <Skill Icon={tailwind} Item='Tailwind' Description='A utility-first CSS framework for rapidly building custom designs' className='mx-4' />
    <Skill Icon={bootstrap} Item='Bootstrap' Description='A popular CSS framework for building responsive, mobile-first websites' className='mx-4' />
    <Skill Icon={framer} Item='Framer Motion' Description='A production-ready motion library for React' className='mx-4' />
    <Skill Icon={muicss} Item='Material-Ui' Description='A popular React UI framework based on Googles Material Design' className='mx-4' />
    <Skill Icon={jquery} Item='JQuery' Description='A fast, small, and feature-rich JavaScript library' />
  </div>
  <div className='flex flex-wrap overflow-auto items-center justify-evenly md:hidden h-[75vh]'>

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={vscode} alt='vscode' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={git} alt='git' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={html} alt='html' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={css} alt='css' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={JS} alt='js' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={python} alt='python' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={nodejs} alt='nodejs' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={postgresql} alt='postgresql' className='w-[15%]' />
  
<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={firebase} alt='firebase' className='w-[15%]' />

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={nextjs} alt='nextjs' className='w-[15%]' /> 

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={tailwind} alt='tailwind' className='w-[15%]' /> 

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={bootstrap} alt='bootstrap' className='w-[15%]' />

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={framer} alt='framer' className='w-[15%]' />

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={muicss} alt='muicss'  className='w-[15%]' />

<motion.img
  initial={{ opacity: 0, y: getRandomXY().y, x: getRandomXY().x }}
  transition={{ duration: getRandomNumber() }}
  whileInView={{ opacity: 1, y: 0, x: 0 }}
  src={jquery} alt='jquery'  className='w-[15%]' />

  </div>
</motion.div>

  )
}



export default Skills