'use client'

import React, { ReactNode } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface DropdownListItem {
    title: string,
    children: ReactNode
    imgSrc?: string,
    arrowIsRightSide?: boolean
}

const DropdownListItem = ({ title, children, imgSrc, arrowIsRightSide = false }: DropdownListItem) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className={`flex w-full items-center px-3 rounded-lg ${isOpen ? 'bg-[#2a1b55]' : 'bg-[#241a43]'} ${arrowIsRightSide ? 'justify-between' : 'gap-2'}`} onClick={() => setIsOpen((prev) => !prev)}>
                {!arrowIsRightSide && (
                    !isOpen
                        ?
                        <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={40} height={40} />
                        :
                        <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
                )}
                <div className='flex gap-2'>
                    {imgSrc && (
                        <div>
                            <Image src={`${basePath + imgSrc}`} alt='list item' width={22} height={22} />
                        </div>
                    )}
                    <p className={`${isOpen ? 'font-bold' : ''}`}>{title}</p>
                </div>
                {arrowIsRightSide && (
                    !isOpen
                        ?
                        <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
                        :
                        <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={40} height={40} />
                )}
            </button>
            {isOpen && (
                <div className='top-6 px-3 font-normal'>
                    <ul>
                        {children}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default DropdownListItem