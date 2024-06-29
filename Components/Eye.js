import React from 'react'
import Eyes from './Eyes'

const Eye = () => {
  return (
    <>
    <div>
                    <div className='relative h-[18vw] w-[18vw] rounded-[50%] bg-white flex items-center justify-center'>
                        <div className='absolute h-[12vw] w-[12vw] rounded-[50%] bg-black top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate-180}deg)`}} className='line  w-full h-10  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='bg-white w-[2vw] h-[2vw] rounded-[50%]'></div>
                            </div>
                        </div>
                    </div>
    </div>
    </>
  )
}

export default Eye