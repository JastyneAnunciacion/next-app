import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import SmallIcon from '../SmallIcon'
import CurrencyDropdown from '../dropdowns/CurrencyDropdown'

const BuyCrypto = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex gap-[7px] items-center'>
                    <SmallIcon
                        circleWidthPixel={30}
                        circleHeightPixel={30}
                        iconWidthPixel={15}
                        iconHeightPixel={11}
                        iconSrc='/images/credit-card-image.png'
                    />
                    <p className='text-responsive-md'>Buy Crypto</p>
                </div>
                <p className='text-[#D187FF9C] text-opacity-[61]'>Buy crypto instantly, and have it automatically transferred to your wallet. Services related to payments are provided by a separate platform which is owned by a third party.</p>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <p className='text-responsive-sm ml-[6px] text-[#C4C4C4]'>Your Pay</p>
                <div className='h-[63px] w-full text-responsive-md'>
                    <CurrencyDropdown
                        currencyIconWidthPixel={30}
                        currencyIconHeightPixel={30}
                        dropDownButtonWidthPixel={36}
                        dropDownButtonHeightPixel={36}
                        dropDownArrowWidthPixel={12}
                        dropDownArrowHeightPixel={15}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[3px]'>
                <div className='h-[60px] rounded-t-lg bg-[#241A43] flex items-center px-[19px]'>
                    <p className='text-responsive-sm text-[#836FCD]'>Provider</p>
                </div>
                <div className='h-[60px] rounded-b-lg bg-[#241A43] flex items-center px-[19px]'>
                    <p className='text-responsive-sm text-[#836FCD]'>Methods</p>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#607073] via-[#A9C7CB] to-[#546265] w-full h-[49px] p-[1px] rounded-lg mb-[40px]'>
                <button className='flex items-center gap-[9px] justify-center bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] w-full h-full rounded-lg text-white'>
                    <div className='shrink-0'>
                        <Image src={`${basePath}/images/tip-jar-image.png`} alt='Buy Crypto Icon' width={21} height={21}></Image>
                    </div>
                    <p>Buy Crypto</p>
                </button>
            </div>

            <div className='bg-[#23213C] rounded-lg text-[16px] text-[#637AF4] px-[25px] py-15 h-[74px] flex items-center'>
                <p>Depending on the blockchain network, the purchase may take a few minutes to arrive.</p>
            </div>
        </div>
    )
}

export default BuyCrypto