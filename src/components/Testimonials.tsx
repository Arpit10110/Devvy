import React from 'react'
import Marquee from 'react-fast-marquee'
import { testimonials } from '../data/testimonialdata'
const Testimonials = () => {
  return (
   <>
    <div className='mb-[8rem] cursor-default ' >
        <div className='flex justify-center items-center' >
                <h1 className="text-[4rem] ml-[2rem]  font-tektur font-bold bg-gradient-to-r from-cyan-500 via-violet-500 to-violet-500 bg-clip-text text-transparent text-center w-fit  " >What the Homies Say</h1>
        </div>
        <div className='mt-[7rem] w-full flex justify-center items-center bg-[#ffffff0f] py-[3rem] ' >
            <Marquee speed={150} >
                {
                    testimonials.map((i,index)=>{
                        return(
                            <div key={index} className='w-[85%] mx-[2rem] bg-black px-[3rem] py-[2rem] rounded-[7px] flex flex-col gap-[0.5rem]'>
                                <h2 className='text-[1.5rem] font-tektur font-semibold text-cyan-400'>{i.name}</h2>
                                <span className='text-[1.2rem] text-violet-500'>{i.tag}</span>
                                <p className='text-[2rem]'>{i.quote}</p>
                          </div>
                        )
                    })
                }
            </Marquee>
        </div>
    </div>
   </>
  )
}

export default Testimonials