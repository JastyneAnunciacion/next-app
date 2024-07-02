import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SmallIconProps {
    width?: number,
    height?: number,
    iconSrc?: string,
}

const SmallIcon = ({ width = 24, height = 24, iconSrc }: SmallIconProps) => {
    const icon = iconSrc ? iconSrc : '/images/popular-games-image.png';
    return (
        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className="bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center"
        >
            <Image src={basePath + icon} alt="Quick List Icon" width={width} height={height} />
        </div>
    )
}

export default SmallIcon