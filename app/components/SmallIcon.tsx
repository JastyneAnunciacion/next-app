import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SmallIconProps {
    circleSize?: string,
    iconSrc?: string,
    iconSize?: string,
}

const SmallIcon = ({ circleSize, iconSrc, iconSize }: SmallIconProps) => {
    const icon = iconSrc ? iconSrc : '/images/popular-games-image.png';
    return (
        <div
            style={{ width: circleSize, aspectRatio: 1 / 1 }}
            className="bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0"
        >
            <div style={{ width: iconSize, aspectRatio: 1 / 1 }}>
                <Image src={basePath + icon} alt="Small Icon" layout='responsive' width={100} height={100} />
            </div>
        </div>
    )
}

export default SmallIcon