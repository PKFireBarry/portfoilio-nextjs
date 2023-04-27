import React from 'react'

type Props = {}

function Journey({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto 
    items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-gray-500 text-2xl pt-4'>My Journey</h3>

      <div className='flex absolute'>
        <div className='bg-gray-100 rounded-lg p-8 shadow-lg 
          md:mr-8 md:mb-0 mb-8'>
          <h4 className='text-lg font-bold mb-2'>IT Administrator</h4>
          <p className='text-gray-700 text-base'>
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
        </div>

        <div className='bg-gray-100 rounded-lg p-8 shadow-lg'>
          <h4 className='text-lg font-bold mb-2'>Channel Sales Representative</h4>
          <p className='text-gray-700 text-base'>
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
        </div>
      </div>
    </div>
  )
}

export default Journey