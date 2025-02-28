import React from 'react'
import { FoooterLogos } from '../constants'
import { Icon } from '@iconify/react'

const Footer:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-r from-[#221E23] to-[#322433] '>
        <img className='w-full' src={FoooterLogos} alt="" />
        <div className=' mt-20 mb-10 flex justify-around w-full items-center text-sm text-gray-300 tracking-wider max-md:text-xs max-md:mt-10'>
            <h1> Copyright <span className='text-gray-500 font-semibold'>©</span> 2024 DcodeBlock</h1>
                <div className='flex max-md:flex-col'>
                <h1>Help Center </h1>
                <Icon icon="fluent-mdl2:separator" className='w-10 h-10 max-md:hidden'/>
                <h1>Terms and Conditions</h1>
                <Icon icon="fluent-mdl2:separator" className='w-10 h-10 max-md:hidden'/>
                <h1>Privacy policy</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer