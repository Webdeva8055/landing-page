import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='footer w-full h-screen flex items-center justify-center px-20 py-20 mt-40'>
            <div className='w-1/2 h-full flex flex-col  justify-between'>
                <div className='font-sans font-bold tracking-tight leading-[5vw] text-[6vw] uppercase text-white'>
                    <h1>life time-</h1>
                    <h1>memorable</h1>
                </div>
                <div className='w-[6vw] h-[6vw] '>
                    <img src='logo.PNG'/>
                </div>
            </div>
            <div className='w-1/2 h-full flex flex-col gap-10 items-start'>
                <h1 className='uppercase font-sans font-bold text-white text-[6vw]'>Events</h1>
                <div className='flex flex-col gap-1 px-3'>
                    <h3 className='capitalize font-sans  text-white text-[1vw]'>Kedar Jagtap :-</h3>
                    <p className='uppercase font-sans  text-white text-[0.8vw]'>+91888088xxxx</p>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Footer