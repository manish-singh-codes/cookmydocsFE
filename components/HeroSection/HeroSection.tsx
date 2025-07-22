'use client'

import React from 'react'
import { roboto } from './../../utils/font'
import {motion} from 'motion/react'

const HeroSection = () => {

  return (
    <div className=''>
      <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex md:flex-row flex-col mt-20 items-center gap-[10%] relative '>
        <motion.div className=' absolute bottom-10 right-10 w-[10%] blur-3xl h-[20%] bg-green-500 -z-10'   animate={{
        scale: [1.5,2,1.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }} ></motion.div>
        <motion.div className=' absolute top-20 right-0 w-[10%] blur-3xl h-[30%] bg-indigo-500 -z-10'  animate={{
        scale: [1.5,2,1.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}></motion.div>
        <motion.div
             initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} 
              >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl  font-bold text-gray-600 ${roboto.className} `}>Powerful <span className=' text-indigo-600 '>Resume</span> <span className=' text-green-600 '>Builder</span> with Smart <span className='text-indigo-600'>Tools</span> to Match.</h1>
            <p className='mt-4 text-lg text-gray-600'>
                Cook your documents with ease using our intuitive tools designed for efficiency and style.
            </p>
            <div className='flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start'>
                  <button className='mt-6 rounded-lg px-4 py-2 bg-gradient-to-br from-green-500 to-green-800 text-white hover:bg-blue-700'>
                Build your Resume
            </button>
            <button className='mt-6 px-4 py-2 bg-gradient-to-br from-indigo-400 to-indigo-800 text-white rounded-lg hover:bg-blue-700'>
                Check your ATS Score
            </button>
            </div>
        </motion.div>
        <motion.div 
             initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }} 
        className=' hidden md:block '>
            <div className='w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]'>
                <img src="https://instaresume.io/section_1.webp" alt="Hero Image" className=' object-contain w-full h-full' />
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
