import React from 'react'
import { ReactNode } from 'react'
import SmallIcon from '../SmallIcon'

interface ListContainterWithTitleHeaderProps {
  title: string,
  children: ReactNode,
  imgSrc?: string
  hasBorderBottom?: boolean
}

const ListContainterWithTitleHeader = ({ title, children, imgSrc, hasBorderBottom = true }: ListContainterWithTitleHeaderProps) => {
  return (
    <div>
      <div className='flex w-full gap-1 items-center text-[20px] text-w px-3'>
        {imgSrc && (
          <SmallIcon
            circleSize='6.25vw'
            iconSize='3.54vw'
            iconSrc={imgSrc} />
        )}
        <div>
        </div>
        {title}
      </div>
      <div className={`px-3 py-[18px] ${hasBorderBottom && 'border-b border-[#261E47]'} flex flex-col`}>
        {children}
      </div>
    </div>
  )
}

export default ListContainterWithTitleHeader