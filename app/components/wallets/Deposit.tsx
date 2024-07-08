import React from 'react'
import WalletDropdown from '../dropdowns/WalletDropdown'
import SelectionDropdown from '../dropdowns/SelectionDropdown'
import CopyTextTemplate from '../copy/CopyTextTemplate'
import WarningTemplate from '../WarningTemplate'

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
            <div className='flex flex-col gap-2'>
                <p>Select Currency</p>
                <div className='h-14'>
                    <WalletDropdown />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <p>Select Network</p>
                <div className='h-14'>
                    <SelectionDropdown items={networks} placeArrowOnRight={true} />
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <div>
                        <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                        {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Express Deposit Icon' width={20} height={20}></Image> */}
                    </div>
                    <p>Express Deposit</p>
                </div>
                <div className='text-sm text-[#b575e1]'>
                    <p>You can deposit through Telegram Bots. Choose one of the bots shown below and deposit without delay.</p>
                </div>
                <div className='flex w-full items-center text-sm gap-1 text-white'>
                    <button className={`border-[#352f54] border rounded-md h-10 w-full flex justify-center items-center gap-3`}>
                        <div>
                            <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                            {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20}></Image> */}
                        </div>
                        <p className='text-[#b575e1]'>@Wallet</p>
                    </button>
                    <button className={`border-[#352f54] border rounded-md h-10 w-full flex justify-center items-center gap-3`}>
                        <div>
                            <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                            {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20}></Image> */}
                        </div>
                        <p className='text-[#b575e1]'>@CryptoBot</p>
                    </button>
                </div>
            </div>

            <div>
                <div className='flex gap-2 items-center'>
                    <div>
                        <div className='h-6 w-6 bg-[#8645f6] rounded-full' />
                        {/* <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20}></Image> */}
                    </div>
                    <p>Deposit through Blockchain</p>
                </div>
                <div className='text-sm'>
                    <p className='text-[#b575e1]'>Direct deposits trough blockchain can take up to 10 minutes. Please be patient!</p>
                    <p>Your personal Deposit address:</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='h-10'>
                        <CopyTextTemplate textToCopy='exampleDepositAddressCodeCopyLink' />
                    </div>
                    <WarningTemplate warningText='Please carefully check the deposit wallet address!' />
                </div>
            </div>
        </div>
    )
}

export default Deposit