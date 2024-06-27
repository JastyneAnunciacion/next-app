import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Cashback = () => {
  return (
    <div>
      <div className='flex gap-1 items-center justify-center'>
        <p className='text-[#b575e1] text-xl'>Cashback</p>
      </div>
      <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2 mt-3 flex gap-3 items-center'>
        <div>
          <div className='h-12 w-12 bg-[#8645f6] rounded-full' />
          {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Big Cashback icon' width={45} height={45}></Image> */}
        </div>
        <div>
          <p className='text-sm'>Your cashback:</p>
          <p className='font-bold'>5%</p>
        </div>
      </div>
    </div>
  )
}

export default Cashback