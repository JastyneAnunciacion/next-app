'use client'

import React from 'react'
import Header from '../components/Header'
import QuickMenu from '../components/footers/QuickMenu'
import SelectionDropdown from '../components/dropdowns/SelectionDropdown'
import providerList from '../components/temporaryJsons/provider-list.json'
import GridList from '../components/GridList'
import walletList from '../components/temporaryJsons/wallet-list.json'
import Serachbar from '../components/Serachbar'
import MainComponents from '../components/MainComponents'

const CasinoPage = () => {
  const sortOptions = [
    { value: 'Recommended' },
    { value: 'A-Z' },
    { value: 'Z-A' },
  ]

  const sort = sortOptions.map(sortOption => ({
    content: sortOption.value,
    onClick: () => {
      console.log(`Selected option: ${sortOption.value}`);
    }
  }));

  const providers = providerList.map(provider => ({
    content: provider.Provider,
    onClick: () => {
      console.log(`Selected option: ${provider.Provider}`);
    }
  }))

  return (
    <MainComponents footerPage='Games'>
      <div className='px-4 mt-4 flex flex-col gap-1 text-sm'>
        <SelectionDropdown items={sort} placeHolderText='Sort:' placeArrowOnRight={true} />
        <SelectionDropdown items={providers} placeHolderText='Provider:' placeArrowOnRight={true} />
        <Serachbar placeholderText='Search Games' />
        <GridList list={walletList} />
        <div className='h-20' />
      </div>
    </MainComponents>
  )
}

export default CasinoPage