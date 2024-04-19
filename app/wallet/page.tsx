'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TextLink from '../components/TextLink'
import WalletDropdown from '../components/WalletDropdown'
import Image from 'next/image'

const WalletPage = () => {
  const [option, changeOption] = useState(0);

  return (
    <div>
        <Header />
        <div className='px-4'>
          <button className='flex items-center justify-center bg-blue-400 w-full h-10 rounded-xl my-3 font-bold'> WalletConnect</button>
          <div className='flex justify-between'>
             <div className='flex items-center font-bold'>
                <button onClick={() => changeOption(0)} className={`bg-${option === 0 ? 'gray-800' : 'white'} text-${option === 0 ? 'white' : 'black'} h-10 w-24 rounded-xl mr-5`}>Deposit</button>
                <button onClick={() => changeOption(1)} className={`bg-${option === 1 ? 'gray-800' : 'white'} text-${option === 1 ? 'white' : 'black'} h-10 w-24 rounded-xl`}>Withdraw</button>
            </div>
            <div className='underline'>
              <TextLink text='Buy Crypto' />
            </div>
          </div>
          {option === 0 ? (
            <div>
              <p>Select the token to deposit (Min 0.0001 BTC)</p>
              <WalletDropdown />
              <p>BTC deposit address</p>
              <div className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'>exampledepositaddress</div>
              <div className='flex justify-center flex-col items-center'>
                <Image src="/images/qr-code-sample-image.png" alt="QRCode" width={400} height={500}/>
                <p>Send only BTC to this deposit address.</p>
                <p className='text-wrap'>Values sent below the minimum amount or to an incorrect address will be lost.</p>
              </div>
            </div>
          ) : (
            <div>
              <p>Select the token to withdraw (Min 0.0002 BTC)</p>
              <WalletDropdown />
              <p>Your withdrawal address</p>
              <input placeholder='Your withdrawal address' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
              <p>Amount</p>
              <input placeholder='Amount' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
              <button className='flex items-center justify-center bg-gray-800 w-full h-10 rounded-xl my-3 font-bold text-white'>Withdraw</button>
              <p>Requesting a withdrawal will mean that you forfeit all bonus funds.</p>
            </div>
          )}
        </div>
        <Footer currentPage='Wallet' />
    </div>
  )
}

export default WalletPage