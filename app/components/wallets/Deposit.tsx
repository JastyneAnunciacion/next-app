import React from 'react'
import WalletDropdown from '../dropdowns/WalletDropdown'
import SelectionDropdown from '../dropdowns/SelectionDropdown'
import CopyTextTemplate from '../copy/CopyTextTemplate'
import WarningTemplate from '../WarningTemplate'
import SmallIcon from '../SmallIcon'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const Deposit = () => {
    const networkOptions = [
        { value: 'TRC-20' },
        { value: 'ERC-20' },
        { value: 'BEP-20' },
    ]

    const networks = networkOptions.map(networkOption => ({
        content: networkOption.value,
        onClick: () => {
            console.log(`Selected option: ${networkOption.value}`);
        }
    }));

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-[10px]'>
                <p className='ml-[6px] text-responsive-md'>Select Currency</p>
                <div className='h-[63px] text-responsive-md'>
                    <WalletDropdown
                        bitCoinWidthPixel={30}
                        bitCoinHeightPixel={30}
                        dropDownButtonWidthPixel={36}
                        dropDownButtonHeightPixel={36}
                        dropDownArrowWidthPixel={12}
                        dropDownArrowHeightPixel={15}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
                <p className='ml-[6px] text-responsive-md'>Select Network</p>
                <div className='h-[60px] text-responsive-sm'>
                    <SelectionDropdown
                        items={networks}
                        placeArrowOnRight={true}
                        dropDownButtonWidthPixel={36}
                        dropDownButtonHeightPixel={36}
                        dropDownArrowWidthPixel={12}
                        dropDownArrowHeightPixel={15}
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
                    <p className='text-responsive-md'>Express Deposit</p>
                </div>
                <p className='text-[#b575e1] text-wrap'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>
                <div className='flex w-full items-center h-[49px] gap-[11px] text-white'>
                    <button className={`border-[#3B335D] border rounded-md h-full w-full flex justify-center items-center gap-3`}>
                        <div className='shrink-0'>
                            <Image src={`${basePath}/images/safe-purple-image.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20} />
                        </div>
                        <p className='text-[#D187FF]'>Wallet</p>
                    </button>
                    <button className={`border-[#3B335D] border rounded-md h-full w-full flex justify-center items-center gap-3`}>
                        <div className='shrink-0'>
                            <Image src={`${basePath}/images/tip-jar-purple-image.png`} alt='Deposit Throught Blockchain Icon' width={21} height={21} />
                        </div>
                        <p className='text-[#D187FF]'>@CryptoBot</p>
                    </button>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex gap-[7px] items-center'>
                        <SmallIcon
                            circleWidthPixel={30}
                            circleHeightPixel={30}
                            iconWidthPixel={15}
                            iconHeightPixel={11}
                            iconSrc='/images/credit-card-image.png'
                        />
                        <p className='text-responsive-md'>Deposit through Blockchain</p>
                    </div>
                    <p className='text-[#D187FF] text-wrap'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>
                    <div className='mt-[2px] h-[60px]'>
                        <CopyTextTemplate textToCopy='exampleDepositAddressCodeCopyLink' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposit