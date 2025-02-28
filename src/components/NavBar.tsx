import React from 'react'
import { Logodb } from '../constants'
import Button from './Button'
import SideBar from '../sections/SideBar'

const NavBar:React.FC = () => {
  return (
    <div className=' bg-black flex justify-between md:px-32 max-md:px-10 py-2'>
      <div className='absolute left-0 top-0 z-50 '>
          <SideBar/>
      </div>
      <img src={Logodb} alt="Logo-DB" className='w-[1/3] mx-5 '/>
      <Button name='Sign in' size='md'/>
    </div>
  )
}

export default NavBar