'use client'

import React from 'react'
import Header from '../../components/Header'
import QuickMenu from '../../components/quickMenu/QuickMenu'
import SelectionDropdown from '../../components/dropdowns/SelectionDropdown'
import providerList from '../../components/temporaryJsons/provider-list.json'
import GridList from '../../components/GridList'
import walletList from '../../components/temporaryJsons/wallet-list.json'
import Serachbar from '../../components/Serachbar'
import MainComponents from '../../components/MainComponents'

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
    <MainComponents>
      <div className='w-full max-w-[91.88%] flex flex-col gap-1 reponsive-text'>
        <SelectionDropdown items={sort} placeHolderText='Sort:' placeArrowOnRight={true} />
        <SelectionDropdown items={providers} placeHolderText='Provider:' placeArrowOnRight={true} />
        <Serachbar placeholderText='Search Games' />
        <GridList list={walletList} />
      </div>
    </MainComponents>
  )
}

export default CasinoPage