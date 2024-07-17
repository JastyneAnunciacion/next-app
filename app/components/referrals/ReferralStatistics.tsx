import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'

const ReferralStatistics = () => {
    return (
        <div className='w-full flex flex-col gap-[10px] mb-[10px] responsive-text text-nowrap'>
            <div className='flex gap-2'>
                <div className='w-[48.97%] h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                    <p>Referrals</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <div className='w-[48.97%] h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                    <p>Referrals Wagered</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex flex-col gap-[12px]'>
                <p>Total Earned</p>
                <div className='flex gap-[7px] items-center'>
                    <div>
                        <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
            <div className='w-full h-[87px] bg-[#241b42] rounded-lg px-[11px] py-[9px] flex justify-between'>
                <div className='flex flex-col gap-[12px]'>
                    <p>Claimable Earnings</p>
                    <div className='flex gap-[7px] items-center'>
                        <div>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30} />
                        </div>
                        <p>0.00</p>
                    </div>
                </div>
                <button className='border flex items-center justify-center gap-3 px-[11.76%] border-[#332a61] text-[#b575e1] w-[42.40%] h-[49px] self-center rounded-lg mr-[11.76%]'>
                    <div className='shrink-0'>
                        <Image src={`${basePath}/images/tip-jar-purple-image.png`} alt='Token Icon' width={15} height={21} />
                    </div>
                    <p>Claim Earnings</p>
                </button>
            </div>
        </div>
    )
}

export default ReferralStatistics