'use client'

import { ReactNode, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import SmallIcon from '../../SmallIcon';

interface QuickListProps {
  headerIconPath: string,
  title: string,
  childrenList: ReactNode,
  gap?: string,
  viewAllLink?: string,
}

const QuickList = ({ headerIconPath, title, childrenList, gap = '0', viewAllLink }: QuickListProps) => {
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
      handleScroll();

      return () => {
        list.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={`flex flex-col gap-[4.37vw] items-center font-manrope`}>
      <div className='flex w-full items-center justify-between max-w-[91.88%]'>

        <div className='w-full flex items-center gap-[2.08vw]'>
          <SmallIcon circleSize='6.25vw' iconSize='2.5vw' iconAspectWidth={10} iconAspectHeight={12} iconSrc={headerIconPath} />
          <p className='text-[4.16vw] w-full flex-shrink text-nowrap'>{title}</p>
        </div>

        <div className='flex items-center gap-[2.71vw] w-full'>
          {viewAllLink && (
            <div className=' ml-auto'>
              <Link href={viewAllLink} className='w-[19.17vw] aspect-[92/41] border border-[#332a61] text-[2.91vw] rounded-md flex items-center justify-center'>
                View All
              </Link>
            </div>
          )}

          <div className='flex gap-[0.21vw] items-center justify-center'>
            <button
              onClick={() => scrollTo('left')}
              className={`w-[8.33vw] aspect-square flex items-center justify-center rounded-l-3xl ${isAtStart ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtStart}
            >
              <p className={`text-[22px] font-mono ${isAtStart ? 'text-gray-400' : 'text-gray-300'}`}>&lt;</p>
            </button>
            <button
              onClick={() => scrollTo('right')}
              className={`w-[8.33vw] aspect-square flex items-center justify-center rounded-r-3xl ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtEnd}
            >
              <p className={`text-[22px] font-mono ${isAtEnd ? 'text-gray-400' : 'text-gray-300'}`}>&gt;</p>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ gap: gap, paddingLeft: gap }}
        className={`flex w-full overflow-x-auto scrollbar-none`} ref={listRef}>
        {childrenList}
      </div>
    </div >
  )
}

export default QuickList;
