import React from 'react'
import BigBanner from './BigBanner'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface PromotionTempateProps {
    title: string,
    subTitle: string,
    imgSrc?: string,
    endDate: Date
}

const PromotionTempate = ({title='Title', subTitle='SubTitle', imgSrc, endDate=new Date}: PromotionTempateProps) => {
    const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const endDateString = endDate.toLocaleDateString();

  return (
    <div className='flex flex-col gap-2'>
        <div>
            <p className='font-bold text-4xl'>{title}</p>
            <p>{subTitle}</p>
        </div>
        <BigBanner imgSrc={imgSrc} />
        <div className='flex gap-1 items-center'>
          <div>
              <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Date Icon' width={20} height={20}></Image>
          </div>
          <p>Ends at {endTime} {endDateString}</p>
      </div>
    </div>
  )
}

export default PromotionTempate