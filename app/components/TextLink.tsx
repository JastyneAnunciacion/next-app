'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import basePath from '../utilities/basepath';

interface TextLinkProps {
    text: string,
    linkHref?: string,
    onClick?: () => void,
    hasImage?: boolean,
    customLinkSrc?: string,
    customImageWidth?: number | null,
    customImageHeight?: number | null,
    showImageOnRightSideOfText?: boolean,
}

const TextLink = ({ text, linkHref="", onClick = () => {}, hasImage = false, customLinkSrc ="", customImageWidth=null, customImageHeight=null, showImageOnRightSideOfText = true}: TextLinkProps) => {
    const linkImageSrc = customLinkSrc ? customLinkSrc : '/images/link-image.png';
    const imageWidth = customImageWidth ? customImageWidth : 15;
    const imageHeight = customImageHeight ? customImageHeight : 15;
    return (
        <Link href={linkHref} className='flex items-center'>
            <div onClick={onClick} className='flex items-center cursor-pointer'>
                {!showImageOnRightSideOfText && hasImage && (
                    <Image className='mr-2' src={basePath + linkImageSrc} alt="Link Icon" width={imageWidth} height={imageHeight} />
                )}
                <div>{text}</div>
                {showImageOnRightSideOfText && hasImage && (
                    <Image className='ml-2' src={basePath + linkImageSrc} alt="Link Icon" width={imageWidth} height={imageHeight} />
                )}
            </div>
        </Link>
        
    );
};

export default TextLink