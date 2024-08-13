'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

interface CopyButtonProps {
    textToCopy: string
}

const CopyButton = ({ textToCopy }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={copyToClipboard} className='w-full h-full bg-[#352C58] flex items-center justify-center rounded- shrink-0 rounded-lg'>
            <div className='w-[2.29vw] aspect-[11/15]'>
                <Image src={`${basePath}/images/copy-image.png`} alt='Copy Icon' layout='responsive' width={100} height={100} />
            </div>
        </button>
    )
}

export default CopyButton