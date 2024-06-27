'use client'

import { ReactNode, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import basePath from '../../../utilities/basepath';
import Link from 'next/link';

interface QuickListProps {
  headerIconPath: string,
  title: string,
  childrenList: ReactNode,
  gapAmount?: number,
  viewAllLink?: string
}

const QuickList = ({ headerIconPath: headerImagePath, title, childrenList, gapAmount = 0, viewAllLink }: QuickListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

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

  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const isStart = list.scrollLeft === 0;
    const isEnd = list.scrollWidth - list.clientWidth === list.scrollLeft;

    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      handleScroll(); // Initialize state based on initial scroll position

      return () => {
        list.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className='mt-3 pt-1'>
      <div className='flex w-full items-center justify-between'>

        <div className='flex flex-grow items-center'>
          <div className='pr-2'>
            <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
            {/* <Image src={basePath + headerImagePath} alt="Quick List Icon" width={24} height={24}></Image> */}
          </div>
          <p className='text-nowrap'>{title}</p>
        </div>

        <div className='flex items-center'>
          {viewAllLink && (
            <div className='flex justify-end'>
              <Link href={viewAllLink} className='w-20 h-9 border border-[#332a61] text-xs rounded-md mr-2 flex items-center justify-center'>
                View All
              </Link>
            </div>
          )}

          <div className='flex gap-[1px] items-center justify-center'>
            <button
              onClick={() => scrollTo('left')}
              className={`w-8 h-8 flex items-center justify-center text-xs rounded-l-lg ${isAtStart ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtStart}
            >
              <Image src={`${basePath}/images/left-arrow-image.png`} alt="Left Arrow" width={30} height={30} />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className={`w-8 h-8 flex items-center justify-center text-xs rounded-r-lg ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtEnd}
            >
              <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
            </button>
          </div>
        </div>
      </div>

      <div className={`flex overflow-x-auto scrollbar-none gap-${gapAmount}`} ref={listRef}>
        {childrenList}
      </div>
    </div>
  )
}

export default QuickList;
