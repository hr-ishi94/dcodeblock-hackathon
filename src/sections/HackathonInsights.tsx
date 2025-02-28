import React from 'react'
import { Bolt } from '../constants'

const HackathonInsights:React.FC = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-[#322433] to-[#221E23] '>
        <img src={Bolt} alt="bolt" className='absolute mt-20 z-20 max-md:mt-8 '/>
        <div className='w-full h-full flex justify-around  items-center max-md:flex-col max-md:pt-20 max-md:justify-center max-md:gap-20'>

            <div className='text-xl text-gray-200  flex  flex-col items-start gap-10 justify-center'>
                    <h1 className='flex flex-col '><span className='text-3xl '>150+</span>Universities paricipating</h1>
                <div className='flex gap-5'>
                    <h1 className='flex flex-col'><span className='text-3xl'>72+</span>Judges</h1>
                    <h1 className='flex flex-col'><span className='text-3xl'>21</span>Hackathons</h1>
                    <h1 className='flex flex-col '><span className='text-3xl'>36+</span>Great Speakers</h1>
                </div>
            </div>
            <div className='w-150 h-90 max-md:w-105 max-md:h-58  '>
                <iframe className='w-full h-full' src="https://www.youtube.com/embed/gi1kkMbfNAE?si=6DWMZxKAWQKwkYeX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            
        </div>
    </div>
  )
}

export default HackathonInsights