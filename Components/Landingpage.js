import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landingpage = () => {
    
  return (
    <>
       <div data-scroll data-scroll-section data-scroll-speed="-.5" 
       className=' landing bg-zinc-900 min-h-screen w-full pt-1'>
        <div className='textStructure mt-52 px-10'>
        {['we create','un-forgetable','memories'].map((item,ind)=>{
                    return  (
                    <div className='marker'>
                        <div className='w-fit flex items-end overflow-hidden text-zinc-50'>
                            {ind === 1 && (
                                <motion.div  
                                initial={{width:0}} animate={{width:"8vw"}} transition={{ease:[0.76, 0, 0.42, 1],duration:1}}
                                className='mr-[1vw] w-[8vw] rounded-md h-[5vw] relative '>
                                    <img className='w-full h-full object-cover object-center' 
                                    src='landing_pic.png'/>
                                </motion.div>
                            )}
                            <h1 className='p-[0.5vw] -mb-[1vw] uppercase text-[6vw] leading-[.90] tracking-tighter markerText font-bold'>{item}</h1>
                        </div>
                    </div>
                    );
                })}
        </div>

        <div className='border-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-10 text-zinc-50 text-sm'>
            {[
                "Photo shoot's & Video shoot's",
                "Event decorator's's & designer's"
            ].map((item,ind)=>{
              return  <h2 className=''>{item}</h2>
            })}
            <div className='flex items-center justify-between gap-5'>
                <div className='rounded-[20px] bg-zinc-800 border-zinc-700 border-[1px] px-5 py-2 '>albums</div>
                <FaArrowUpLong color='white' className='bg-zinc-800 rounded-[50%] p-3 border-zinc-700 border-[1px]'size={35} />
            </div>

        </div>
       </div>
    </>
  )
}

export default Landingpage