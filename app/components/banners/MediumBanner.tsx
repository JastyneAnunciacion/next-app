import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface MediumBannerProps {
    hasSeparateButton?: boolean,
    buttonText?: string
    imgSrc?: string
}

const MediumBanner = ({ hasSeparateButton, buttonText, imgSrc }: MediumBannerProps) => {
    return (
        <div>
            {hasSeparateButton ? (
                <div className='bg-gray-400 h-60 flex justify-center rounded-lg w-full relative'>
                    {imgSrc && (
                        <Image src={basePath + imgSrc} alt="Banner" layout="fill" objectFit="cover" className="rounded-lg" />
                    )}
                    <button className='bg-gray-800 text-white text-lg rounded-3xl w-[min(90%,30rem)] h-14 absolute bottom-4'>{buttonText}</button>
                </div>
            ) : (
                <button className={`shrink-0 w-full h-auto flex items-center justify-center`}>
                    <Image src={basePath + imgSrc} alt='Banner Image' layout='responsive' width={100} height={100} className='rounded-lg' />
                </button>
            )}
        </div>
    )
}

export default MediumBanner