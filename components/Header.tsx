import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/solid';


type Props = {}

function Header({}: Props) {
return (
<header className="sticky top-0 flex items-center justify-between max-w-6xl mx-auto z-20 p-4">
  <motion.div
    initial={{ opacity: 0, x: -500, scale: 0.5 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 120 }}
    className="flex flex-row items-center"
  >
    {/* icons */}
    <a href="https://drive.google.com/file/d/1q3wYHTx3Mac9t0_cjzqrhAWDg3hyhiG5/view?usp=share_link">
      <DocumentTextIcon className="h-6 w-6 text-gray cursor-pointer animate-pulse hover:text-blue-600 hover:underline hover:animate-bounce" />
    </a>
    <SocialIcon
      url="https://www.linkedin.com/in/darion-george/"
      fgColor="gray"
      bgColor="transparent"
    />
    <SocialIcon
      url="https://github.com/PKFireBarry"
      fgColor="gray"
      bgColor="transparent"
    />
  </motion.div>
  <Link href="#contact">
    <motion.div
      initial={{ opacity: 0, x: 500, scale: 0.5 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 120 }}
      className="flex flex-row items-center text-gray-500 cursor-pointer"
    >
      <SocialIcon
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="uppercase hidden md:inline-flex text-sm text-grey-400">
        Wanna Contact Me?
      </p>
    </motion.div>
  </Link>
</header>
        )
}

export default Header