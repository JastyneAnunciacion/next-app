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
      <div className='flex w-full gap-[1.46vw] items-center text-[4.16vw] font-medium px-[2.08vw]'>
        {imgSrc && (
          <SmallIcon
            circleSize='6.25vw'
            iconSize='3.54vw'
            iconSrc={imgSrc} />
        )}
        {title}
      </div>
      <div className={`mt-[2.08vw] gap-[6.25vw] ${hasBorderBottom && 'border-b border-[#261E47]'} flex flex-col`}>
        {children}
      </div>
    </div>
  )
}

export default ListContainterWithTitleHeader