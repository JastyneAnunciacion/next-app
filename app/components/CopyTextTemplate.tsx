import React from 'react'
import CopyButton from './CopyButton'

interface CopyTextTemplate {
  textToCopy: string
}

const CopyTextTemplate = ({textToCopy}: CopyTextTemplate) => {
  return (
      <div className='bg-gray-700 text-white h-full w-full rounded-xl flex justify-between p-4 items-center gap-2'>
        <div className='text-xs'>
          {textToCopy}
        </div>
          <CopyButton textToCopy={textToCopy} />
      </div>
  )
}

export default CopyTextTemplate