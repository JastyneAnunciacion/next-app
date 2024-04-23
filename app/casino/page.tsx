'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelectionDropdown from '../components/SelectionDropdown'
import providerList from '../components/provider-list.json'
import GridList from '../components/GridList'
import walletList from '../components/wallet-list.json'

const CasinoPage = () => {
  const sortOptions = [
    {value: 'Recommended'},
    {value: 'A-Z'},
    {value: 'Z-A'},
  ] 

  const sort = sortOptions.map(sortOption => ({
  content: sortOption.value,
  onClick: () => {
    console.log(`Selected option: ${sortOption.value}`);
  }}));
  const providers = providerList.map(provider => ({
    content: provider.Provider,
     onClick: () => {
    console.log(`Selected option: ${provider.Provider}`);
  }}))

  return (
    <div> 
        <Header />
          <div className='px-4 mt-4 flex flex-col gap-1 text-sm'>
            <SelectionDropdown items={sort} placeHolderText='Sort:' placeArrowOnRight={true} />
            <SelectionDropdown items={providers} placeHolderText='Provider:' placeArrowOnRight={true} />
            <input placeholder='Search Game' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4 font-bold' />
            <GridList list={walletList} />
            <div className='h-20' />
          </div>

        <Footer currentPage='Casino' />
    </div>
  )
}

export default CasinoPage