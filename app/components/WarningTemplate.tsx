import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface WarningTemplateProps {
    warningText: string
}

const WarningTemplate = ({warningText}: WarningTemplateProps) => {
  return (
         <div className='bg-amber-400/50 text-orange-600 h-10 w-full rounded-xl p-4 flex gap-3 items-center'>
            <div>
                <Image src={`${basePath}/images/warning-image.png`} alt='No Records Icon' width={20} height={20}></Image>
            </div>
            <p>{warningText}</p>
        </div>
  )
}

export default WarningTemplate