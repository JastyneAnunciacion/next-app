import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SmallIconProps {
    widthPixel?: number,
    heightPixel?: number,
    iconSrc?: string,
}

const SmallIcon = ({ widthPixel = 24, heightPixel = 24, iconSrc }: SmallIconProps) => {
    const icon = iconSrc ? iconSrc : '/images/popular-games-image.png';
    return (
        <div
            style={{ width: `${widthPixel}px`, height: `${heightPixel}px` }}
            className="bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0"
        >
            <Image src={basePath + icon} alt="Quick List Icon" width={12} height={12} />
        </div>
    )
}

export default SmallIcon