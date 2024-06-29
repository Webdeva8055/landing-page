import React from 'react'

const Card = () => {
  return (
    <>
        <div className='cardsContainer w-full py-10  px-10 gap-10 flex '>
        <div className='w-1/2 flex justify-center items-center gap-10'>
                <div className='card relative w-1/2 h-[60vh] bg-[#d6d1d1] rounded-2xl p-10'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <img src='events.png'/>
                    </div>
                    <button className='text-zinc-900 border-[1px] border-zinc-900 py-1 px-4 font-sans rounded-full absolute bottom-5'>Design's & Decor's</button>
                </div>
                <div className='card relative w-1/2 h-[60vh] bg-[#c29595] rounded-2xl p-10'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <img src='caterings.png'/>
                    </div>
                    <button className='text-zinc-900 border-[1px] border-red-600 py-1 px-4 font-sans rounded-full absolute bottom-5'>Catering's</button>
                </div>
            </div>
            <div className='card relative w-1/2 h-[60vh] bg-[#004D43] rounded-2xl p-10'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <img src='logo.png'/>
                </div>
                <button className='text-white border-[1px] border-zinc-400 py-1 px-4 font-sans rounded-full absolute bottom-5'>Photo & VideoGraphy</button>
            </div>
           
        </div>
    </>
  )
}

export default Card