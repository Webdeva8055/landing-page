import React from 'react'

const About = () => {
  return (
    <div className='w-full py-10 bg-[#ba95f5] rounded-t-[15px] p-10'>
        <h1 className='text-[4vw] text-black font-sans leading-[5vw] tracking-tight '>“To be fully seen by somebody then and be loved anyhow — this is a human offering that can border on miraculous.”</h1>
        <div className='border-y-[#a891e9] border-l-0 border-r-0 border-[1px] mt-10 flex items-center'>
                <div className='w-1/2 py-10'>
                    <h1 className='text-black text-[3vw]'>Design & Decor</h1>
                    <button className='bg-zinc-900 text-[1vw] py-3 px-6 mt-[1vw] text-white rounded-full uppercase flex items-center gap-5'>
                        <h1>read more</h1>
                        <div className='bg-white w-2 h-2 rounded-full'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[25vw] m-[3vw] shadow-md shadow-gray-900 rounded-3xl overflow-hidden'><img src='about_pic.jpg' className='object-cover'/></div>
        </div>
    </div>
  )
}

export default About