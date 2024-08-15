import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText: string
}

const Serachbar = ({ placeholderText }: SerachbarProps) => {
  return (
    <div className='flex gap-[2.70vw] h-full w-full rounded-xl px-[4.17vw] bg-[#241A43] items-center justify-start font-manrope'>
      <div className='w-[5.20vw] aspect-square'>
        <Image src={`${basePath}/images/search-purple-image.png`} alt='Search Icon' layout='responsive' width={100} height={100} />
      </div>
      <input placeholder={placeholderText} className='w-full text-[4.17vw] bg-transparent text-white [&::-webkit-inner-spin-button]:appearance-none outline-none' />
    </div>
  )
}

export default Serachbar