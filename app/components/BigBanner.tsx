import React from 'react'
import Image from 'next/image'

interface BigBannerProps {
    hasSeparateButton?: boolean,
    buttonText?: string
    imageSrc: string
}

const BigBanner = ({hasSeparateButton=false, buttonText="Check Banner", imageSrc}: BigBannerProps) => {
  return (
    <div>
        {hasSeparateButton ? (
        <div className='bg-gray-400 mt-4 h-80 flex justify-center rounded-lg w-full relative'>
            <Image src={imageSrc} alt="Banner" layout="fill" objectFit="cover" className="rounded-lg" />
            <button className='bg-gray-800 text-white text-lg rounded-3xl w-[min(90%,30rem)] h-14 absolute bottom-4'>{buttonText}</button>
        </div>
        ) : (
        <button style={{backgroundImage: `${imageSrc}`}} className='bg-gray-400 mt-4 h-80 flex justify-center rounded-lg w-full'>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {imageSrc && (
              <Image src={imageSrc} alt="Banner" layout="fill" objectFit="cover" className="rounded-lg" />
            )}
          </div>
        </button>
        )}
    </div>
  )
}

export default BigBanner