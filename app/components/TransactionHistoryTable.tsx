import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const TransactionHistoryTable = () => {
  return (
    <div>
        <div className='flex gap-1'>
            <div>
                <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Transactions Icon' width={20} height={20}></Image>
            </div>
            <p className='font-semibold'>Transactions</p>
        </div>
        <div className='mt-2 bg-gray-500 h-64 rounded-xl overflow-hidden'>
            <div className='flex justify-between text-white text-sm font'>
                <p className='bg-gray-600 w-full p-2'>Type</p>
                <p className='bg-gray-600 w-full p-2'>Amount</p>
                <p className='bg-gray-600 w-full p-2'>Status</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 p-4'>
                <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='No Records Icon' width={50} height={50}></Image>
                </div>
                <p>No records</p>
            </div>
        </div>
        <div className='flex items-center justify-center mt-3'>
            <button className='bg-gray-700 text-gray-400 rounded-xl p-3 h-10 flex items-center'>
                Load More
            </button>
        </div>
        <div className='h-40'/>
    </div>
  )
}

export default TransactionHistoryTable