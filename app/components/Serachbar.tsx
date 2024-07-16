import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText: string
}

const Serachbar = ({ placeholderText }: SerachbarProps) => {
  return (
    <div className='flex gap-2 h-full w-full rounded-lg p-4 bg-[#241A43] items-center justify-start'>
      <div className='flex-shrink-0'>
        <Image src={`${basePath}/images/search-purple-image.png`} alt='Search Icon' width={25} height={25} />
      </div>
      <input placeholder={placeholderText} className='w-full bg-transparent text-white [&::-webkit-inner-spin-button]:appearance-none outline-none' />
    </div>
  )
}

export default Serachbar