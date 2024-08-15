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
        <div className='flex flex-col gap-[5vw]'>
            <div className='flex flex-col gap-[2.08vw]'>
                <p className='ml-[1.25vw] text-[4.17vw]'>Select Currency</p>
                <div className='h-[13.12vw]'>
                    <WalletDropdown
                        paddingLeft='3.96vw'
                        paddingRight='4.79vw'
                        arrowBoxSize='7.5vw'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <p className='ml-[1.25vw] text-[4.17vw]'>Select Network</p>
                <div className='h-[12.5vw]'>
                    <SelectionDropdown
                        items={networks}
                        placeArrowOnRight={true}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[1.46vw] items-center'>
                    <SmallIcon
                        circleSize='6.25vw'
                        iconSize='3.13vw'
                        iconSrc='/images/credit-card-image.png'
                        iconAspectWidth={15}
                        iconAspectHeight={11}
                    />
                    <p className='text-[4.17vw]'>Express Deposit</p>
                </div>
                <p className='text-[#D187FF]'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>
                <div className='flex w-full items-center gap-[2.29vw]'>
                    <button className={`border-[#3B335D] border rounded-2xl w-[44.79vw] aspect-[215/49] flex justify-center items-center gap-[2.08vw]`}>
                        <div className='w-[3.87vw] aspect-[18.57/20]'>
                            <Image src={`${basePath}/images/safe-purple-image.png`} alt='Safe Icon' layout='responsive' width={100} height={100} />
                        </div>
                        <p className='text-[#D187FF]'>Wallet</p>
                    </button>
                    <button className={`border-[#3B335D] border rounded-2xl w-[44.79vw] aspect-[215/49] flex justify-center items-center gap-[2.45vw]`}>
                        <div className='w-[3.09vw] aspect-[14.82/21]'>
                            <Image src={`${basePath}/images/tip-jar-purple-image.png`} alt='Tip Jar Icon' layout='responsive' width={100} height={100} />
                        </div>
                        <p className='text-[#D187FF]'>@CryptoBot</p>
                    </button>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-[2.08vw]'>
                    <div className='flex gap-[1.46vw] items-center'>
                        <SmallIcon
                            circleSize='6.25vw'
                            iconSize='3.13vw'
                            iconSrc='/images/credit-card-image.png'
                            iconAspectWidth={15}
                            iconAspectHeight={11}
                        />
                        <p className='text-[4.17vw]'>Deposit through Blockchain</p>
                    </div>
                    <p className='text-[#D187FF]'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>
                    <div className='mt-[0.42vw] h-[12.5vw]'>
                        <CopyTextTemplate textToCopy='exampleDepositAddressCodeCopyLink' textWidth='100%' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposit