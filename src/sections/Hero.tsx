import React from 'react'
import { BgVideo, HackIndia, Singularity } from '../constants'
import Menu from '../components/Menu'
import {Icon} from '@iconify/react'
import Button from '../components/Button'

const Hero:React.FC = () => {
  return (
    <header className="relative h-screen  overflow-hidden">
  
        <div className="absolute inset-0 backdrop-blur-xs bg-gray-300/5 z-10"></div>

        <div className="container relative z-30 text-white flex justify-start xl:px-36  max-lg:px-5 gap-10 items-center my-5 max-md:hidden ">
            <div className='flex items-center gap-2 '>
                <img src={HackIndia} alt="HackIndia" />
                <h1 className='uppercase text-xl tracking-widest max-xl:hidden'>HackIndia</h1>
            </div>
            <Menu/>
        </div>
        
        <div className="relative z-30 p-5 text-2xl text-white flex flex-col items-center justify-center rounded-xl mt-10 container max-md:mt-24">
        
            <img src={Singularity} alt="SingularityNet" className='w-60 max-md:w-40'/>
                <h1 className='text-7xl  mb-2 tracking-wider z-30 max-md:text-4xl'>
                    <span className='bg-orange-500 pl-2 rounded-lg py-2 ring ring-gray-50/50 mr-0.5'>Ha</span>ckIndia2025 
                </h1>
            <h1 className='font-justina font-semibold my-2 text-center max-md:text-lg'>India's Biggest Web3 & AI Hackathon</h1>
            <div className='font-justina my-4 bg-gradient-to-r from-[#6A1799] to-[#230833] border-2  px-6 rounded-lg py-2 text-lg max-md:text-base'><h1> February 28 - September 28</h1></div>
            <div className='flex gap-10 font-justina max-md:text-xs max-md:gap-1' >
                <h1><span className='text-orange-500'>$150+</span> Price Pool </h1>
                <Icon icon="fluent-mdl2:separator" className='w-10 h-10 max-md:w-5 max-md:h-5'/>
                <h1><span className='text-orange-500'>150+</span> University </h1>
                <Icon icon="fluent-mdl2:separator" className='w-10 h-10 max-md:w-5 max-md:h-5'/>
                <h1><span className='text-orange-500'>25,000</span> Students</h1>
            </div>
            <div className='font-justina mt-4 mr-8'>
                <Button name='Register now!' size='lg'/>
            </div>
        </div>

        <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover filter"
        >
            <source src={BgVideo} type="video/mp4" />
        </video>
    </header>

  )
}

export default Hero