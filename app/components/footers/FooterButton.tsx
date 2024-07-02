import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../../utilities/basepath';

interface FooterButtonProps {
  buttonName: string;
  iconSrc: string;
  pageHref: string;
  active: boolean;
}

const FooterButton = ({ buttonName, iconSrc, pageHref, active }: FooterButtonProps) => {
  return (
    <div>
      <Link href={pageHref} className={`${active && 'border rounded-full pointer-events-none'} p-2 flex flex-col items-center gap-1`}>
        <div className='flex-shrink-0'>
          <Image src={basePath + iconSrc} alt='Footer Button Image' width={30} height={30}></Image>
        </div>
        <div className='text-xs'>
          {buttonName}
        </div>
      </Link>
    </div>
  )
}

export default FooterButton