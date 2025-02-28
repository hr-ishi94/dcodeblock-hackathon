import React from 'react'
import { Logodb } from '../constants'
import Button from './Button'

const NavBar:React.FC = () => {
  return (
    <div className=' bg-black flex justify-between md:px-32 max-md:px-5 py-2'>
        <img src={Logodb} alt="Logo-DB" />
        <Button name='Sign in' size='md'/>
    </div>
  )
}

export default NavBar