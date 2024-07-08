import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

const ReferralStatistics = () => {
    return (
        <div className='w-full flex flex-col gap-[10px] mb-[10px]'>
            <div className='flex gap-2'>
                <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                    <p className='text-[16px]'>Referrals</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                    <p className='text-[16px]'>Referrals Wagered</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                <p className='text-[16px]'>Total Earned</p>
                <div className='flex gap-[7px] items-center'>
                    <div>
                        <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
            <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex justify-between'>
                <div className='flex flex-col gap-[12px]'>
                    <p className='text-[16px]'>Claimable Earnings</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30} />
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <button className='border flex items-center justify-center gap-3  border-[#332a61] text-[#b575e1] w-[187px] h-[49px] self-center rounded-lg mr-10'>
                    <div>
                        <Image src={`${basePath}/images/tokens/tip-jar-purple-image.png`} alt='Token Icon' width={15} height={21} />
                    </div>
                    <p>Claim Earnings</p>
                </button>
            </div>
        </div>
    )
}

export default ReferralStatistics