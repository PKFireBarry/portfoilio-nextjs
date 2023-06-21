import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Skill from './Skill'
import Image from 'next/image'


type Props = {

}



function Skills({}: Props) {

const x = useMotionValue(200)
const y = useMotionValue(200)

const rotateX = useTransform(y, [0, 400], [45, -45])
const rotateY = useTransform(x, [0, 400], [-45, 45])

function handleMouse(event: { pageX: number; pageY: number }) {
    x.set(event.pageX)
    y.set(event.pageY)
}

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
const flask = 'https://cdn.worldvectorlogo.com/logos/flask.svg'
const prisma =  'https://cdn.worldvectorlogo.com/logos/prisma-3.svg'
const azure = 'https://cdn.worldvectorlogo.com/logos/azure-1.svg'
const npm = 'https://cdn.worldvectorlogo.com/logos/npm-2.svg'
const figma = 'https://cdn.worldvectorlogo.com/logos/figma-5.svg'

  return (
    <>
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: getRandomNumber()  }}
  viewport={{ once: true }}
  className='flex flex-col mx-auto text-center justify-center w-screen h-screen overflow-hidden items-center'>
    <div>
  <h3 className='font-semibold text-lg md:text-4xl uppercase tracking-[2px] text-black underline m-4'>Tools Of The Trade?</h3>
  <p className='font-semibold text-md md:text-xl uppercase tracking-[2px] text-black  m-4'>
    sometimes all we need is a push a push?
  </p>

    </div>

  <motion.div
  
  onMouseMove={handleMouse}

  className='hidden flex-wrap overflow-auto items-center justify-center md:flex bg-[#a2c7f1] md:h-[70%] w-[85%] rounded-2xl border-4 border-solid border-[#031463] shadow-[0px_0px_50px_rgba(0,_0,_0,_0.8)]'>
    <Skill Icon={vscode} Item='VSCode' Description='A powerful code editor' />
    <Skill Icon={git} Item='Git' Description='A distributed version control system' />
    <Skill Icon={html} Item='HTML' Description='The standard markup language for web pages'/>
    <Skill Icon={css} Item='CSS' Description='A stylesheet language used to describe the presentation of a document written in HTML' />
    <Skill Icon={JS} Item='JS' Description='A high-level programming language used to create interactive websites' />
    <Skill Icon={python} Item='Python' Description='A popular programming language used for web development, data analysis, and artificial intelligence'  />
    <Skill Icon={nodejs} Item='NodeJS' Description='A JavaScript runtime built on Chromes V8 JavaScript engine' />
    <Skill Icon={postgresql} Item='PostgreSQL' Description='A powerful, open source object-relational database system'/>
    <Skill Icon={firebase} Item='Firebase' Description='A mobile and web application development platform' />
    <Skill Icon={reactjs} Item='React' Description='A JavaScript library for building user interfaces' />
    <Skill Icon={nextjs} Item='NextJS' Description='A framework for building server-side rendered React applications' />
    <Skill Icon={tailwind} Item='Tailwind' Description='A utility-first CSS framework for rapidly building custom designs' />
    <Skill Icon={bootstrap} Item='Bootstrap' Description='A popular CSS framework for building responsive, mobile-first websites' />
    <Skill Icon={framer} Item='Framer Motion' Description='A production-ready motion library for React' />
    <Skill Icon={muicss} Item='Material-Ui' Description='A popular React UI framework based on Googles Material Design' />
    <Skill Icon={jquery} Item='JQuery' Description='A fast, small, and feature-rich JavaScript library' />
    <Skill Icon={flask} Item='Flask' Description='A microframework for Python' />
    <Skill Icon={prisma} Item='Prisma' Description='A database toolkit for ORM' />
    <Skill Icon={azure} Item='Azure' Description='A cloud computing platform' />

    <Skill Icon={npm} Item='NPM' Description="a package manager for the JavaScript programming language"/>

    <Skill Icon={figma} Item='Figma' Description='web application for interface design'/>
  </motion.div>
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

    </>


  )
}



export default Skills