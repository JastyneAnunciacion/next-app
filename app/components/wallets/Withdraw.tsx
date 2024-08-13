import React from 'react'
import WalletDropdown from '../dropdowns/WalletDropdown'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import SmallIcon from '../SmallIcon'

const Withdraw = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-[10px]'>
                <p className='text-responsive-md ml-[6px]'>Select Currency</p>
                <div className='text-responsive-md h-[63px]'>
                    <WalletDropdown
                    // bitCoinWidthPixel={30}
                    // bitCoinHeightPixel={30}
                    // dropDownButtonWidthPixel={36}
                    // dropDownButtonHeightPixel={36}
                    // dropDownArrowWidthPixel={12}
                    // dropDownArrowHeightPixel={15}
                    // customPaddingX={4.53}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <div className='flex gap-[7px] items-center'>
                    <SmallIcon
                        circleWidthPixel={30}
                        circleHeightPixel={30}
                        iconWidthPixel={15}
                        iconHeightPixel={11}
                        iconSrc='/images/credit-card-image.png'
                    />
                    <p className='text-responsive-md'>Withdraw through Blockchain</p>
                </div>
                <p className='text-[#b575e1]'>Direct withdrawal trough blockchain can take up to 10 minutes. Please be patient!</p>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <p className='text-responsive-md text-[#C4C4C4] ml-[6px]  '>Withdrawal address</p>
                <input placeholder='Enter your address' className='w-full bg-[#241A43] h-[60px] rounded-xl flex items-center pl-4 [&::-webkit-inner-spin-button]:appearance-none outline-none placeholder-white' />
            </div>

            <div className='flex flex-col gap-1'>
                <div className='flex justify-between items-center'>
                    <p className='text-responsive-md text-[#C4C4C4] ml-[6px]'>Withdrawal Amount</p>
                    <div className='text-responsive-sm flex gap-[6px] items-center'>
                        <p className='text-[#C4C4C4]'>Available:</p>
                        <div className='flex gap-[5px] items-center shrink-0'>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Buy Crypto Icon' width={20} height={20} />
                            <p>0</p>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-[#241A43] h-[60px] rounded-xl text-white flex items-center justify-between px-[4.53%]'>
                    <div className='flex gap-[11px] items-center'>
                        <div className='shrink-0'>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={30} height={30}></Image>
                        </div>
                        <input placeholder='0.00' className='w-full text-[20px] bg-transparent [&::-webkit-inner-spin-button]:appearance-none outline-none' type='number' />
                    </div>
                    <button className='bg-[#352C58] w-[13.60%] h-[39px] px-[15px] flex items-center justify-center mr-[1.13%] rounded-lg text-white'>25%</button>
                    <button className='bg-[#352C58] w-[13.60%] h-[39px] px-[15px] flex items-center justify-center mr-[1.13%] rounded-lg text-white'>50%</button>
                    <button className='bg-[#352C58] w-[13.60%] h-[39px] px-[15px] flex items-center justify-center rounded-lg text-white'>100%</button>
                </div>

                <div className='flex gap-2 items-center mb-[20px]'>
                    <p className='ml-[6px] text-responsive-xs text-[#D187FF]'>Minimal withdrawal: </p>
                    <div className='flex gap-[5px] items-center'>
                        <div className='shrink-0'>
                            <Image src={`${basePath}/images/tokens/BTC-outline-icon.png`} alt='Token Icon' width={20} height={20}></Image>
                        </div>
                        <p>1</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#736260] via-[#CBADA9] to-[#655654] w-full h-[49px] p-[1px] rounded-lg'>
                    <button className='flex items-center gap-[9px] justify-center bg-gradient-to-r from-[#DCA39B] to-[#765753] w-full h-full rounded-lg text-white'>
                        <div className='shrink-0'>
                            <Image src={`${basePath}/images/tip-jar-image.png`} alt='Withdraw Icon' width={21} height={21}></Image>
                        </div>
                        <p>Withdraw</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Withdraw