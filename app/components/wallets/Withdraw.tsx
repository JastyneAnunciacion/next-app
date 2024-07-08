import React from 'react'
import WalletDropdown from '../dropdowns/WalletDropdown'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const Withdraw = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <p>Select Currency</p>
                <WalletDropdown />
            </div>

            <div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Withdraw Throught Blockchain Icon' width={20} height={20}></Image>
                    </div>
                    <p className='font-semibold'>Deposit through Blockchain</p>
                </div>
                <p className='text-sm'>Direct withdrawal trough blockchain can take up to 10 minutes. Please be patient!</p>
            </div>

            <div className='font-semibold'>
                <p>Withdrawal address</p>
                <input placeholder='Enter your address' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>Withdrawal amount</p>
                    <div className='flex gap-1'>
                        <p className='text-gray-600'>Available:</p>
                        <p className='font-semibold'>0 TON</p>
                    </div>
                </div>
                <div className='w-full bg-gray-800 h-10 rounded-xl text-white flex items-center justify-between px-3'>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                        </div>
                        <input placeholder='0.00' className='w-80 bg-gray-800 [&::-webkit-inner-spin-button]:appearance-none outline-none' type='number' />
                    </div>
                    <div className='flex gap-1'>
                        <button className='bg-slate-950 w-12 py-1 rounded-lg text-gray-400 hover:border border-blue-50 hover:text-white'>25%</button>
                        <button className='bg-slate-950 w-12 py-1 rounded-lg text-gray-400 hover:border border-blue-50 hover:text-white'>100%</button>
                        <button className='bg-slate-950 w-12 py-1 rounded-lg text-gray-400 hover:border border-blue-50 hover:text-white'>50%</button>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-sm'>Minimal amount: </p>
                    <div>
                        <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Withdraw Throught Blockchain Icon' width={20} height={20}></Image>
                    </div>
                    <p className='font-semibold'>1</p>
                </div>
                <button className='flex items-center justify-center bg-gray-800 w-full h-10 rounded-xl my-3 font-bold text-white'>Withdraw</button>
            </div>
        </div>
    )
}

export default Withdraw