import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

const ReferralStatistics = () => {
    return (
        <div>
            <div className='w-full flex flex-col gap-2 mt-3'>
                <div className='flex gap-2'>
                    <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2 flex flex-col gap-1'>
                        <p>Referrals</p>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Wagered Icon' width={20} height={20}></Image>
                            </div>
                            <p>0.00</p>
                        </div>
                    </div>
                    <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2 flex flex-col gap-1'>
                        <p>Referrals Wagered</p>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Bets Icon' width={20} height={20}></Image>
                            </div>
                            <p>0.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2 flex flex-col gap-1'>
                    <p>Total Earned</p>
                    <div className='flex gap-1 items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <div className='w-full h-[70px] bg-[#241b42] rounded-lg p-2 flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <p>Claimable Earnings</p>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <Image src={`${basePath}/images/tokens/BTC-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                            </div>
                            <p>0.00</p>
                        </div>
                    </div>
                    <button className='border flex items-center justify-center gap-2 border-[#332a61] text-[#b575e1] w-44 h-10 self-center rounded-lg mr-10'>
                        <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                        <p>Claim Earnings</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReferralStatistics