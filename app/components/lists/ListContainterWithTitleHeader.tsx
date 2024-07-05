import React from 'react'
import { ReactNode } from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

interface ListContainterWithTitleHeaderProps {
  title: string,
  children: ReactNode,
  imgSrc?: string
}

const ListContainterWithTitleHeader = ({ title, children, imgSrc }: ListContainterWithTitleHeaderProps) => {
  return (
    <div>
      <div className='flex gap-1 items-center text-[20px] text-w px-3'>
        {imgSrc && (
          <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
          // <Image src={`${basePath + imgSrc}`} alt='Referral Icon' width={20} height={20}></Image>
        )}
        <div>
        </div>
        {title}
      </div>
      <div className='px-3 py-[18px] border-b border-[#261E47] flex flex-col gap-[15px]'>
        {children}
      </div>
    </div>
  )
}

export default ListContainterWithTitleHeader