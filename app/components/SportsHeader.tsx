import React from 'react'
import SportsHeaderButton from './SportsHeaderButton'
import SportsDropdown from './SportsDropdown'

const SportsHeader = () => {
  return (
    <div className='bg-gray-800 h-16 w-full flex items-center px-4 justify-stretch'>
        <div className='flex border-r-[1px] h-9 border-white items-center pr-2'>
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
        </div>
        <div className='flex w-full pl-2 justify-between'>
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
            <SportsHeaderButton />
        </div>
    </div>
  )
}

export default SportsHeader