import React from 'react'
import { motion } from 'framer-motion';
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"
     className=' bg-[#319487] w-full  rounded-tl-2xl text-zinc-50 py-10 px-5 '>
        <div className=' text flex border-[2px] border-l-0 border-r-0 border-zinc-300   overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity , ease:'linear', duration:5}}
             className='text-[10vw] font-bold leading-none font-sans capitalize  py-8 pr-20'>Shoot's & Decors </motion.h1>
            <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}} transition={{repeat:Infinity , ease:'linear', duration:5}}
             className='text-[10vw] font-bold leading-none font-sans  capitalize py-8 pr-20'> Shoot's & Decors</motion.h1>
        </div>
    </div>
  )
}

export default Marquee