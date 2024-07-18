'use client'

import { ReactNode, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import SmallIcon from '../../SmallIcon';

interface QuickListProps {
  headerIconPath: string,
  title: string,
  childrenList: ReactNode,
  gapAmountPixel?: number,
  viewAllLink?: string,
}

const QuickList = ({ headerIconPath, title, childrenList, gapAmountPixel = 0, viewAllLink }: QuickListProps) => {
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
    <div className={`flex flex-col gap-[11px] items-center`}>
      <div className='flex w-full items-center justify-between max-w-[91.88%]'>

        <div className='w-full flex items-center gap-[10px]'>
          <div>
            <SmallIcon circleWidthPixel={30} circleHeightPixel={30} iconSrc={headerIconPath} />
          </div>
          <p className='text-responsive-sm w-full text-nowrap'>{title}</p>
        </div>

        <div className='flex items-center'>
          {viewAllLink && (
            <div className='flex justify-end'>
              <Link href={viewAllLink} className='w-[92px] h-[41px] border border-[#332a61] text-responsive-xs  rounded-md mr-[13px] flex items-center justify-center'>
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
              <p className={`text-[22px] font-mono ${isAtStart ? 'text-gray-400' : 'text-gray-300'}`}>&lt;</p>
            </button>
            <button
              onClick={() => scrollTo('right')}
              className={`w-[40px] h-[40px] flex items-center justify-center text-xs rounded-r-2xl ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
              disabled={isAtEnd}
            >
              <p className={`text-[22px] font-mono ${isAtEnd ? 'text-gray-400' : 'text-gray-300'}`}>&gt;</p>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ gap: `${gapAmountPixel}px`, paddingLeft: `${gapAmountPixel}px` }}
        className={`flex w-full overflow-x-auto scrollbar-none`} ref={listRef}>
        {childrenList}
      </div>
    </div >
  )
}

export default QuickList;
