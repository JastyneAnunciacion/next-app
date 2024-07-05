import React from 'react'
import { ReactNode } from 'react'

interface BannerProps {
  children: ReactNode
}

const SmallBanner = ({ children }: BannerProps) => {
  return (
    <div className='w-full h-24 bg-[#241A43] flex justify-center gap-2 items-start flex-col px-[18px] rounded-2xl'>
      {children}
    </div>
  )
}

export default SmallBanner