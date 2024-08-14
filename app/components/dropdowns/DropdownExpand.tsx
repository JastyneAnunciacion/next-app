'use client'

import React, { ReactNode, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface DropdownExpandProps {
    title: string,
    children: ReactNode,
    isArrowOnRight?: boolean
    position?: 'Top' | 'Middle' | 'Bottom';
}

const DropdownExpand = ({ title, children, isArrowOnRight = true, position = 'Middle' }: DropdownExpandProps) => {
    const [isOpen, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            if (isOpen) {
                const additionalHeightVW = window.innerWidth * 0.0333;
                content.style.maxHeight = `${content.scrollHeight + additionalHeightVW}px`;
                content.style.padding = '8px';
            } else {
                content.style.maxHeight = '0px';
                content.style.padding = '0px';
            }
        }
    }, [isOpen, children]);

    return (
        <div className={`w-full transition-all text-[3.33vw] font-medium duration-500 ${position === 'Top' && 'rounded-t-lg'} ${position === 'Bottom' && 'rounded-b-lg'} border border-[#39276F] overflow-hidden`}>
            <button
                onClick={() => setOpen(prev => !prev)}
                className={`w-full h-[13.75vw] flex items-center justify-between pl-[6.25vw] pr-[7.83vw] bg-[#241a43] text-left text-[#D187FF] ${position === 'Top' && 'rounded-t-lg border-b'} ${position === 'Middle' && 'border-b'} border-[#4b3785]`}>
                {isArrowOnRight ? (
                    <>
                        <p>{title}</p>
                        {!isOpen ? (
                            <div className='w-[3.20vw] aspect-[15.38/20]'>
                                <Image src={`${basePath}/images/down-thin-arrow-image.png`} alt="Down Arrow" layout='responsive' width={100} height={100} />
                            </div>
                        ) : (
                            <div className='w-[3.20vw] aspect-[15.38/20]'>
                                <Image src={`${basePath}/images/up-thin-arrow-image.png`} alt="Up Arrow" layout='responsive' width={100} height={100} />
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {!isOpen ? (
                            <div className='w-[3.20vw] aspect-[15.38/20]'>
                                <Image src={`${basePath}/images/right-thin-arrow-image.png`} alt="Right Arrow" layout='responsive' width={100} height={100} />
                            </div>
                        ) : (
                            <div className='w-[3.20vw] aspect-[15.38/20]'>
                                <Image src={`${basePath}/images/down-thin-arrow-image.png`} alt="Down Arrow" layout='responsive' width={100} height={100} />
                            </div>
                        )}
                        <p>{title}</p>
                    </>
                )}
            </button>
            <div ref={contentRef} className={`px-4 transition-max-height duration-500 overflow-hidden`}>
                {children}
            </div>
        </div>
    )
}

export default DropdownExpand
