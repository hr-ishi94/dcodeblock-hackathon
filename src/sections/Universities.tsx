import React from 'react'
import { UniversitiesLogo } from '../constants'

const Universities:React.FC = () => {
  return (
    <div className='flex items-center justify-center'>
        <img src={UniversitiesLogo} alt="Universities Logo" />
    </div>
  )
}

export default Universities