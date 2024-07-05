import React from 'react'
import { ReactNode } from 'react'
import SmallIcon from '../SmallIcon'

interface ListContainterWithTitleHeaderProps {
  title: string,
  children: ReactNode,
  imgSrc?: string
}

const ListContainterWithTitleHeader = ({ title, children, imgSrc }: ListContainterWithTitleHeaderProps) => {
  return (
    <div>
      <div className='flex w-full gap-1 items-center text-[20px] text-w px-3'>
        {imgSrc && (
          <SmallIcon circleWidthPixel={30} circleHeightPixel={30} iconSrc={imgSrc} iconWidthPixel={17} iconHeightPixel={17} />
        )}
        <div>
        </div>
        {title}
      </div>
      <div className='px-3 py-[18px] border-b border-[#261E47] flex flex-col'>
        {children}
      </div>
    </div>
  )
}

export default ListContainterWithTitleHeader