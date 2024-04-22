'use client'

import { ReactNode } from 'react'
import { useRef } from 'react';
import Image from 'next/image'
import React from 'react'
import basePath from '../utilities/basepath';

interface quickListProps {
    headerImagePath: string,
    title: string,
    childrenList: ReactNode
}

const QuickList = ({headerImagePath, title, childrenList}: quickListProps) => {
  const listRef = useRef<HTMLDivElement  | null>(null);

  const scrollTo = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollValue = 300;

    if (direction === 'right') {
      list.scrollTo({
        left: list.scrollLeft + scrollValue,
        behavior: 'smooth'
      });
    } else {
      list.scrollTo({
        left: list.scrollLeft - scrollValue,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='mt-3 pt-1'>
        <div className='flex items-center w-full'>
          <div className='flex items-center'>
            <div className='pr-2'>
              <Image src={basePath + headerImagePath} alt="headerImagePath" width={24} height={24}></Image>
            </div>
            <div className= 'font-bold'>
              {title}
            </div>
          </div>
          <div className='ml-auto text-white'>
            <button onClick={() => scrollTo('left')} className='w-6 h-6 bg-gray-800 text-xs rounded-lg mr-2'>◀</button>
            <button onClick={() => scrollTo('right')} className='w-6 h-6 bg-gray-800 text-xs rounded-lg mr-2'>▶</button>
          </div>
        </div>
        <div className='flex overflow-x-auto scrollbar-none' ref={listRef}>
          {childrenList}
        </div>
    </div>
  )
}

export default QuickList