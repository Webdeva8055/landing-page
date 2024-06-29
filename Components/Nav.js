import React from 'react'
import { motion } from 'framer-motion'
const Nav = () => {
  return (
    <>
    <motion.div initial={{top:"0"}} onScroll={{top:"-100%"}}
    className='fixed w-full z-[999] px-10 py-2 flex justify-between items-center top-0 left-0 '>
        <img src='logos.png' className='w-25 h-20 object-center  drop-shadow-md shadow-slate-300'/>
        <div className='text-white font-sans capitalize text-[1.2vw] flex justify-center items-center gap-7'>
            {['Services','Albums','About Us','Contact'].map((item,ind)=>{
               return <a href='#' className={`${(ind === 3) && "ml-40"}`}>{item}</a>
            })}
        </div>
    </motion.div>
  </>
  )
}

export default Nav