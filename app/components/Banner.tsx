import React from 'react'
import { ReactNode } from 'react'

interface bannerProps {
    children: ReactNode
}

const Banner = ({children}: bannerProps) => {
  return (
    <div className='w-full h-36 bg-gray-600 flex justify-center gap-2 items-start flex-col px-5 rounded-2xl text-white font-bold'>
        {children}
    </div>
  )
}

export default Banner