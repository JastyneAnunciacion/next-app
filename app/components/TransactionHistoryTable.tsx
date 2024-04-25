import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const TransactionHistoryTable = () => {
  return (
    <div>
        <div className='flex gap-1'>
            <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={20} height={20}></Image>
            <p className='font-semibold'>Transactions</p>
        </div>
        <div className='mt-2 bg-gray-500 h-64 rounded-xl overflow-hidden'>
            <div className='flex justify-between text-white text-sm font'>
                <p className='bg-gray-600 w-full p-2'>Type</p>
                <p className='bg-gray-600 w-full p-2'>Amount</p>
                <p className='bg-gray-600 w-full p-2'>Status</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='statistics icon' width={50} height={50}></Image>
                <p>No records</p>
            </div>
        </div>
    </div>
  )
}

export default TransactionHistoryTable