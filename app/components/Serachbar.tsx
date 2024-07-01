import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText: string
}

const Serachbar = ({ placeholderText }: SerachbarProps) => {
  return (
    <div className='flex gap-2 h-full rounded-lg p-4 bg-[#241b42] items-center justify-start'>
      <div className='flex-shrink-0'>
        <Image src={`${basePath}/images/search-image.png`} alt='Search Icon' width={24} height={24} />
      </div>
      <input placeholder={placeholderText} className='w-full bg-transparent text-white [&::-webkit-inner-spin-button]:appearance-none outline-none' />
    </div>
  )
}

export default Serachbar