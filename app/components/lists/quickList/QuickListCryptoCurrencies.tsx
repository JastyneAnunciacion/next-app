import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath';
import QuickList from './QuickList';

interface QuickListCryptoCurrenciesProps {
  cryptoList: any[];
}

const QuickListCryptoCurrencies = ({ cryptoList }: QuickListCryptoCurrenciesProps) => {
  return (
    <QuickList headerIconPath="/images/pencil-circle-fill.256x256.png" title="Accepted Crypto Currencies" childrenList={cryptoList.map((item, i) => (
      <div key={i}>
        <button className='w-10 h-10 pr-2 cursor-pointer'>
          <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={32} height={32}></Image>
        </button>
      </div>
    ))} />
  )
}

export default QuickListCryptoCurrencies