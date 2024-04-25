import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
    placeholderText: string
}

const Serachbar = ({placeholderText}: SerachbarProps) => {
  return (
     <div className='relative'>
        <input placeholder={placeholderText} className='mt-4 w-full bg-gray-900 h-10 rounded-xl text-white pl-12' />
        <div className='absolute left-3 top-6'>
            <Image src={`${basePath}/images/search-image.png`} alt='Search Icon' width={24} height={24} />
        </div>
    </div>
  )
}

export default Serachbar