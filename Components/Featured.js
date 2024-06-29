import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'


const Featured = () => {
    const cards = [useAnimation(),useAnimation()];

    const handleHover = (index) =>{
        cards[index].start({y:"0"})
    }

    const handleHoverEnd = (index) =>{
        cards[index].start({y:"100%"})
    }
  return (
    <>
    <div className='w-full bg-black py-20 px-10'>
        <div className='w-full  border-b-[1px] py-10 border-zinc-800'>
            <h1 className='text-white font-sans font-medium text-[3vw]'>Our Services</h1>
        </div>
        <div className='cards w-full py-20 flex justify-between items-center gap-5'>
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} 
            className='Container relative w-1/2 h-[60vh] rounded-xl hover:scale-95 ease-in-out duration-1000'>
                <div className='flex justify-left items-center gap-2 mb-5'>
                    <div className='h-[0.7vw] w-[0.7vw] rounded-[50%] bg-zinc-500 '></div>
                    <h1 className='text-white text-[1.1vw] font-sans font-medium'>Pre wedding shoot's</h1>
                </div>
                    <div className=' w-full h-full rounded-xl overflow-hidden'>
                        <h1 className='absolute flex overflow-hidden font-extrabold font-sans z-[9] left-1/2 top-[88%] -translate-x-1/2 -translate-y-1/2 text-zinc-200 text-[4vw]'>
                            {"Pre-Wedding's".split("").map((item,ind)=><motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22, 1, 0.36, 1], delay:0.2}} 
                            className="inline-block" >{item}</motion.span>)}
                        </h1>
                        <img className='object-cover object-center bg-cover w-full h-full hover:scale-110 ease-in-out duration-1000' src='marriage.jpg' alt='img'/>
                    </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='Container relative w-1/2 h-[80vh] rounded-xl hover:scale-95 ease-in-out duration-1000'>
                <div className='flex justify-left items-center gap-2 mb-5'>
                    <div className='h-[0.7vw] w-[0.7vw] rounded-[50%] bg-zinc-500 '></div>
                    <h1 className='text-white text-[1.1vw] font-sans font-medium'>Birthday shoot's</h1>
                </div>
                    <div className=' w-full h-full rounded-xl overflow-hidden' >
                        <h1 className='absolute flex overflow-hidden font-extrabold font-sans  z-[9] right-1/2 top-[88%] translate-x-1/2 -translate-y-1/2 text-zinc-200 text-[4vw]'>
                        {"Birthday's".split("").map((item,ind)=><motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22, 1, 0.36, 1], delay:0.2}}
                        className="inline-block" >{item}</motion.span>)}
                        </h1>
                        <img className='object-cover object-center bg-cover w-full h-full hover:scale-110 ease-in-out duration-1000' src='birthday.jpg' alt='img'/>
                    </div>
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default Featured
