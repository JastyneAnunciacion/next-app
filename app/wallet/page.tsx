'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WalletDropdown from '../components/WalletDropdown'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import SelectionDropdown from '../components/SelectionDropdown'
import CopyTextTemplate from '../components/CopyTextTemplate'
import WarningTemplate from '../components/WarningTemplate'

const WalletPage = () => {
  const [option, changeOption] = useState(0);

  const networkOptions = [
    {value: 'TRC-20'},
    {value: 'ERC-20'},
    {value: 'BEP-20'},
  ] 

  const networks = networkOptions.map(networkOption => ({
  content: networkOption.value,
  onClick: () => {
    console.log(`Selected option: ${networkOption.value}`);
  }}));
  
  return (
    <div>
        <Header />
        <div className='px-4'>
          <div className='my-7 font-bold'>Wallet</div>
          <div className='flex justify-between mb-5'>
            <div className='flex w-full items-center font-bold gap-1'>
              <button onClick={() => changeOption(0)} 
              className={`bg-${option === 0 ? 'gray-800' : 'gray-50'} text-${option === 0 ? 'white' : 'black'} h-10 w-full rounded-xl flex justify-center items-center gap-3`}>
                <div>
                  <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Icon' width={20} height={20}></Image>
                </div>
                Deposit
              </button>
              <button onClick={() => changeOption(1)} 
              className={`bg-${option === 1 ? 'gray-800' : 'gray-50'} text-${option === 1 ? 'white' : 'black'} h-10 w-full rounded-xl flex justify-center items-center gap-3`}>
                <div>
                  <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Withdraw Icon' width={20} height={20}></Image>
                </div>
                Withdraw
              </button>
            </div>
          </div>
          {option === 0 ? (
            <div className='flex flex-col gap-6'>
              <div>
                <p>Select Currency</p>
                <WalletDropdown />
              </div>

              <div> 
                <p>Select Network</p>
                <SelectionDropdown items={networks} placeArrowOnRight={true} />
              </div>

              <div> 
                <div className='flex gap-2 items-center'> 
                  <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Express Deposit Icon' width={20} height={20}></Image>
                  </div>
                  <p className='font-semibold'>Express Deposit</p>
                </div>
                 <div className='text-sm text-gray-500'> 
                  <p>You can deposit through Telegram Bots. Choose one of the bots shown below and deposit without delay.</p>
                </div>
                <div className='flex w-full items-center text-sm gap-1 text-white'>
                  <button className={`bg-gray-800 h-10 w-full rounded-xl flex justify-center items-center gap-3`}>
                    @Wallet
                  </button>
                  <button className={`bg-gray-800 h-10 w-full rounded-xl flex justify-center items-center gap-3`}>
                    @CryptoBot
                  </button>
                </div>
              </div>

              <div> 
                <div className='flex gap-2 items-center'> 
                  <div>
                    <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Deposit Throught Blockchain Icon' width={20} height={20}></Image>
                  </div>
                  <p className='font-semibold'>Deposit through Blockchain</p>
                </div>
                <div className='text-sm text-gray-500'> 
                  <p>Direct deposits trough blockchain can take up to 10 minutes. Please be patient!</p>
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
          ) : (
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
          )}
        </div>
        <Footer currentPage='Wallet' />
    </div>
  )
}

export default WalletPage