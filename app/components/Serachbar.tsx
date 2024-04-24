import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
    placeholderText: string
}

const Serachbar = ({placeholderText}: SerachbarProps) => {
  return (
    <div className='relative'>
        <input placeholder={placeholderText} className='mt-4 w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-12' />
        <Image src={`${basePath}/images/search-image.png`} className='absolute left-3 top-2' alt='Search Icon' width={24} height={24} /> 
    </div>
  )
}

export default Serachbar