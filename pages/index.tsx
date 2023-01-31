import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Jouerny from '@/components/Jouerny'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'
import Image from 'next/image'
import Profilepic from '/home/Barry/My Programs/portfoilio-nextjs/desert .jpg'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-700 text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth
     z-0 scrollbar-track-blue-500/20 scrollbar-thumb-black scrollbar-thin'>
      <Head>
        <title>An Awesome Portfoilio</title>
      </Head>
      <Header />
      <section id='hero' className='snap-center '>
        <Hero />
      </section>
      <section id='about' className='snap-center'>
        <About />
      </section>
      <section id="journey" className='snap-center'>

      </section>
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* experience */}

      {/* contact me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image src={Profilepic} alt='profilePic'
            className='relative filter grayscale hover:grayscale-0 cursor-pointer rounded-full h-[32px] w-[32px] mx-auto object-cover'/>
          </div>
        </footer>
      </Link>


    </div>
  )
}
