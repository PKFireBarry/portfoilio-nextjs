import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

type Props = {}

function Journey({}: Props) {
  return (
<div className=' h-screen  w-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
    items-center text-black'>        

      <h3 className=' absolute top-16 text-center uppercase tracking-[20px] text-gray-500 md:text-left md:text-lg xl:text-2xl text-base'>My Journey</h3>

      <div className='flex flex-col md:flex-row mx-auto px-4 absolute text-sm md:text-lg'>

        <div className='timeline'>
                    <div className='bg-gray-100 rounded-lg p-8 shadow-lg'>
  <h4 className='text-lg font-bold'>Software Developer</h4>
  <p className='text-gray-700 md:text-base text-xs'>
  As an enthusiastic programmer, Ive poured my heart and soul into developing multiple web applications that truly showcase my full-stack development skills. I take pride in my creations, including a dynamic Cover Letter Writer, a stunning Blog, and an engaging Chat Messenger. These projects were built using cutting-edge technologies such as Next.js, Tailwind CSS, OpenAI API, and Firebase, all of which were carefully selected to ensure exceptional user experience and seamless functionality.
  </p>
  {/*
  
  */}
  <span className='text-gray-500 text-xs'></span>
</div> 
          <div className='bg-gray-100 rounded-lg p-8 shadow-lg 
            md:mr-8 md:mb-0 mb-8'>
            <h4 className='text-lg font-bold mb-2'>IT Administrator</h4>
            <p className='text-gray-700 md:text-base text-xs'>
              From 2020 to 2022, I worked as an IT Administrator at Extant3D. 
              During this time, I conducted security audits and vulnerability 
              assessments to identify potential security risks and implemented 
              preventative measures. I also optimized the efficiency of the IT 
              infrastructure by implementing strategies to minimize downtime and 
              improve transaction processing times. I worked closely with the 
              Chief Technology Officer to ensure the smooth operation of the 
              companys data center equipment and IT infrastructure. I 
              investigated and resolved security issues to minimize risks and 
              ensure that the IT infrastructure was secure and protected using 
              a ticket system. I utilized Python to automate routine tasks 
              resulting in a more stable and secure IT infrastructure.
            </p>
            <span className='text-gray-500 text-xs'>2020 - 2022</span>
          </div>

          <div className='bg-gray-100 rounded-lg p-8 shadow-lg hidden md:block'>
            <h4 className='text-lg font-bold mb-2'>Channel Sales Representative</h4>
            <p className='text-gray-700 md:text-base text-xs'>
              Prior to becoming a developer, I worked as a Channel Sales 
              Representative at ActionLink. During this time, I strategically 
              promoted content that equipped big box store associates with 
              essential tools and resources to drive sales of Intels products, 
              resulting in an 8% increase in sales for the client in 2019 in my 
              region. I utilized a comprehensive training program to 
              successfully drive sales growth and significantly enhance brand 
              awareness for the Intel retail edge website. I collaborated with 
              cross-functional teams, including designers and developers, to 
              create engaging and visually appealing web content that 
              effectively communicated the value of Intels products.
            </p>
            <span className='text-gray-500 text-xs'>2019 - 2020</span>
          </div>


          <div className='bg-gray-100 rounded-lg p-8 shadow-lg hidden md:block'>
  <h4 className='text-lg font-bold'>Hillsborough Community College</h4>
  <h4 className='text-base mb-2 font-semibold'>A.S. in Information Technology</h4>
  <p className='text-gray-700 md:text-base text-xs'>
    Relevant Courses: Responsive Web Design, JavaScript Algorithms And Data Structures, Systems Analysis, Python for Everybody.
  </p>
  <span className='text-gray-500 text-xs'>2017 - 2020</span>
</div> 
        </div>

        <style jsx>{`
          .timeline:before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            width: 2px;
            height: 100%;
            background-color: #e2e8f0;
            transform: translateX(-50%);
          }

          .timeline > *:first-child {
            margin-top: 0;
          }

          .timeline > *:last-child {
            margin-bottom: 0;
          }

          .timeline > * {
            position: relative;
            margin: 50px 0;
          }

          .timeline > *:before {
            content: '';
            position: absolute;
            top: 50%;
            left: -6px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #e2e8f0;
            transform: translateY(-50%);
          }

          .timeline > *:after {
            content: '';
            position: absolute;
            top: 50%;
            right: -6px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #e2e8f0;
            transform: translateY(-50%);
          }
        `}</style>

      </div>
    </div>
  )
}

export default Journey