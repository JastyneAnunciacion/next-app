import React, { ReactNode } from 'react'
import { useState } from 'react';
import Image from 'next/image';
import basePath from '../utilities/basepath';

interface DropdownListItem {
    title: string,
    children: ReactNode
    imgSrc: string,
    arrowIsRightSide?: boolean
}

const DropdownListItem = ({title, children, imgSrc, arrowIsRightSide=false}: DropdownListItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button className={`flex w-full items-center px-3 ${isOpen ? 'bg-gray-400 rounded-2xl' : ''} ${arrowIsRightSide ? 'justify-between' : 'gap-2'}`} onClick={() => setIsOpen((prev) => !prev)}>
            {!arrowIsRightSide && (
                !isOpen 
                ? 
                <Image src={`${basePath}/images/right-arrow-black-image.png`} alt="right arrow" width={40} height={40} />
                :
                <Image src={`${basePath}/images/down-arrow-black-image.png`} alt="down arrow" width={40} height={40} />
            )}
            <div className='flex gap-2'>
                <Image src={imgSrc} alt='list item' width={20} height={20}/>
                <p className={`${isOpen ? 'font-bold' : ''}`}>{title}</p>
            </div>
            {arrowIsRightSide && (
                !isOpen 
                ? 
                <Image src={`${basePath}/images/down-arrow-black-image.png`} alt="down arrow" width={40} height={40} />
                :
                <Image src={`${basePath}/images/up-arrow-black-image.png`} alt="up arrow" width={40} height={40} />
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
)}

export default DropdownListItem