import React from 'react'
import CopyButton from './CopyButton'

interface CopyTextTemplate {
  textToCopy: string,
  textWidth?: string,
  paddingLeft?: string,
  paddingRight?: string
}

const CopyTextTemplate = ({ textToCopy, textWidth = '37.71vw', paddingLeft = '3.75vw ', paddingRight = '2.5vw' }: CopyTextTemplate) => {
  return (
    <div
      style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
      className='bg-[#241A43] text-white h-full w-full rounded-xl flex justify-between items-center gap-[1.67vw]'
    >
      <div
        style={{ width: textWidth }}
        className={`text-[3.33vw] text-ellipsis overflow-hidden whitespace-nowrap`}>
        {textToCopy}
      </div>
      <div className='w-[8.13vw] aspect-square'>
        <CopyButton textToCopy={textToCopy} />
      </div>
    </div>
  )
}

export default CopyTextTemplate