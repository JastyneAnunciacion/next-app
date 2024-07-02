'use client'

import { ReactNode, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import basePath from '../../../utilities/basepath';
import Link from 'next/link';
import SmallIcon from '../../SmallIcon';

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

        <div className='flex flex-grow items-center gap-[10px]'>
          <div>
            <SmallIcon width={30} height={30} />
          </div>
          <p className='text-nowrap text-[20px]'>{title}</p>
        </div>

        <div className='flex items-center'>
          {viewAllLink && (
            <div className='flex justify-end'>
              <Link href={viewAllLink} className='w-[92px] h-[41px] border border-[#332a61] text-[14px] rounded-md mr-[13px] flex items-center justify-center'>
                View All
              </Link>
            </div>
          )}

          <div className='flex gap-[1px] items-center justify-center'>
            <button
              onClick={() => scrollTo('left')}
              className={`w-[40px] h-[40px] flex items-center justify-center text-xs rounded-l-2xl ${isAtStart ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtStart}
            >
              <Image src={`${basePath}/images/left-arrow-image.png`} alt="Left Arrow" width={30} height={30} />
            </button>
            <button
              onClick={() => scrollTo('right')}
              className={`w-[40px] h-[40px] flex items-center justify-center text-xs rounded-r-2xl ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
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
