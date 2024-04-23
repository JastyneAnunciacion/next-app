import React from 'react'
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../utilities/basepath';

interface FooterButtonProps {
    children: ReactNode;
    iconSrc: string;
    pageHref: string;
    active: boolean;
}

const FooterButton = ({ children, iconSrc,  pageHref, active}: FooterButtonProps) => {
  return (
    <div>
        <Link href={pageHref} className={`text-white flex-shrink px-2 py-1.5 text-sm flex flex-col items-center gap-1 ${active && 'bg-gray-900 rounded-xl'}`}>
            <Image src={basePath + iconSrc} alt='Footer Button Image' width={20} height={20}></Image>
            {children}
        </Link>
    </div>
  )
}

export default FooterButton