import React from 'react'
import CopyButton from './CopyButton'

interface CopyTextTemplate {
  textToCopy: string,
}

const CopyTextTemplate = ({ textToCopy }: CopyTextTemplate) => {
  return (
    <div className='bg-[#241b42] text-white h-full w-full rounded-xl flex justify-between p-4 items-center gap-2'>
      <div className={`text-[3.33vw] w-[37.71vw] text-ellipsis overflow-hidden whitespace-nowrap`}>
        {textToCopy}
      </div>
      <div className='w-[8.13vw] aspect-square'>
        <CopyButton textToCopy={textToCopy} />
      </div>
    </div>
  )
}

export default CopyTextTemplate