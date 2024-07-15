import React from 'react'
import SmallBanner from './banners/SmallBanner'
import SmallIcon from './SmallIcon'

interface FullMenuNotificationButtonProps {
    imgsrc: string,
    title: string,
    subTitle: string
}

const FullMenuNotificationButton = ({ imgsrc, title, subTitle }: FullMenuNotificationButtonProps) => {
    return (
        <SmallBanner>
            <div className='flex gap-3 items-center'>
                <SmallIcon circleWidthPixel={52} circleHeightPixel={52} iconSrc={imgsrc} iconWidthPixel={34} iconHeightPixel={34} />
                <div className='text-white flex flex-col gap-2 text-sm'>
                    <p className='w-3/5 text-nowrap text-[20px]'>{title}</p>
                    <p className='text-[#b575e1] text-[16px]'>{subTitle}</p>
                </div>
            </div>
        </SmallBanner>
    )
}

export default FullMenuNotificationButton