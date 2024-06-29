import React, { useEffect, useState } from 'react'


const Eyes = () => {
    const [rotate,setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(det)=>{
            let X_pos = det.clientX;
            let Y_pos = det.clientY;

            let Delta_X = X_pos - window.innerWidth/2;
            let Delta_Y = Y_pos - window.innerHeight/2; 

            var Direct = Math.atan2(Delta_Y,Delta_X) * (180/Math.PI);

            setRotate(Direct);
        })
    })
  return (
    <>
        <div className='eyes w-full h-screen overflow-hidden py-5 px-20'>
            <div data-scroll data-scroll-speed="-.2"
            className=' flex relative items-center justify-center w-full h-full bg-cover bg-center bg-[url("https://img.freepik.com/premium-photo/arafed-image-cartoon-character-holding-camera-generative-ai_1034045-910.jpg")]'>
                <div className=' absolute w-2/4  h-2/4 flex top-1/2 left-[55%] -translate-x-[50%] -translate-y-[50%] gap-10 '>
                    <div className='relative h-[18vw] w-[18vw] rounded-[50%]  flex items-center justify-center'>
                        <div className='absolute h-[4vw] w-[4vw] rounded-[50%] bg-black top-[22%] left-[63%] -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate-180}deg)`}} className='line  w-full h-7  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='bg-white w-[0.7vw] h-[0.7vw] rounded-[50%]'></div>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[18vw] w-[18vw] rounded-[50%]  flex items-center justify-center'>
                        <div className='absolute h-[4vw] w-[4vw] rounded-[50%] bg-black top-[13%] right-[78%] -translate-x-[50%] -translate-y-[50%]'>
                            <div style={{transform:`translate(-50%,-50%) rotate(${rotate-180}deg)`}} className='line  w-full h-7  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='bg-white w-[0.7vw] h-[0.7vw] rounded-[50%]'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </>
  )
}

export default Eyes