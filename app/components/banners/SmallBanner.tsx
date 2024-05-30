import React from 'react'
import { ReactNode } from 'react'

interface BannerProps {
    children: ReactNode
}

const SmallBanner = ({children}: BannerProps) => {
  return (
    <div className='w-full h-24 bg-gray-600 flex justify-center gap-2 items-start flex-col px-5 rounded-2xl'>
        {children}
    </div>
  )
}

export default SmallBanner