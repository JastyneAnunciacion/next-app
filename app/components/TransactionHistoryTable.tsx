import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const TransactionHistoryTable = () => {
    return (
        <div>
            <div className='flex gap-1 items-center justify-center'>
                <p className='text-[#b575e1] text-xl'>Transactions</p>
            </div>
            <div className='flex flex-col mt-2 bg-[#241b42] h-64 rounded-xl overflow-hidden'>
                <div className='flex bg-[#6b6483] justify-between text-white text-sm font'>
                    <p className='w-full p-2'>Type</p>
                    <p className='w-full p-2'>Amount</p>
                    <p className='w-full p-2'>Status</p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-3'>
                <button className='border-[#332a61] border rounded-lg p-7 h-10 flex items-center'>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default TransactionHistoryTable