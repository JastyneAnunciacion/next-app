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
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    return (
        <button onClick={copyToClipboard} className='w-full h-full bg-[#352C58] flex items-center justify-center rounded- shrink-0 rounded-lg'>
            <div>
                <Image src={`${basePath}/images/copy-image.png`} alt='Copy Icon' width={11} height={15} />
            </div>
        </button>
    )
}

export default CopyButton