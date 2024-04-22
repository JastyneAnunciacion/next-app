import React from 'react'
import QuickList from './QuickList'
import walletList from './wallet-list.json'
import Image from 'next/image'

const QuickListCryptoCurrencies = () => {
  return (
    <QuickList headerImagePath="/images/pencil-circle-fill.256x256.png" title="Accepted Crypto Currencies" childrenList={walletList.map((item, i) => (
          <div>
            <button className='w-10 h-10 pr-2 cursor-pointer' key={i}>
              <Image src={item.TokenIconSrc} alt="Token Icon" width={32} height={32}></Image>
            </button>
          </div>
    ))} />
  )
}

export default QuickListCryptoCurrencies