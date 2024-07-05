import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SmallIconProps {
    circleWidthPixel?: number,
    circleHeightPixel?: number,
    iconSrc?: string,
    iconWidthPixel?: number,
    iconHeightPixel?: number
}

const SmallIcon = ({ circleWidthPixel = 24, circleHeightPixel = 24, iconSrc, iconWidthPixel = 12, iconHeightPixel = 12 }: SmallIconProps) => {
    const icon = iconSrc ? iconSrc : '/images/popular-games-image.png';
    return (
        <div
            style={{ width: `${circleWidthPixel}px`, height: `${circleHeightPixel}px` }}
            className="bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0"
        >
            <Image src={basePath + icon} alt="Small Icon" width={iconWidthPixel} height={iconHeightPixel} />
        </div>
    )
}

export default SmallIcon