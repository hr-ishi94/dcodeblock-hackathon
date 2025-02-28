import React from 'react'
import Button from './Button'

const Menu:React.FC = () => {
  return (
   
    <div className='flex bg-darkpurple py-3 px-5 ring ring-gray-400/50 rounded-xl gap-4'>
        
        <Button name='OverView' />
        <Button name='Create Team' isActive/>
        <Button name='Prizes' isActive/>
        <Button name='FAQs' isActive/>
        <Button name='Judging' isActive/>
        <Button name='Resources' isActive/>
        
    </div>
    
  )
}

export default Menu