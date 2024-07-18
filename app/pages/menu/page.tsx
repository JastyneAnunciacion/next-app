'use client'

import React from 'react'
import Header from '../../components/Header'
import QuickMenu from '../../components/quickMenus/QuickMenu'
import SmallBanner from '../../components/banners/SmallBanner'
import Serachbar from '../../components/Serachbar'
import ListContainterWithTitleHeader from '../../components/lists/ListContainterWithTitleHeader'
import ListItem from '../../components/lists/ListItem'
import basePath from '../../utilities/basepath'
import DropdownListItem from '../../components/dropdowns/DropdownListItem'

const MenuPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
      <Header />
      <div className='flex justify-center px-3 pt-3 flex-col gap-2'>
        <div className='h-10'>
          <Serachbar placeholderText='Find a Game' />
        </div>
        <SmallBanner>
          <div className='flex gap-3 items-center'>
            <div className='h-14 w-14 bg-[#8645f6] rounded-full' />
            <div className='text-white flex flex-col gap-2 text-sm'>
              <p className='w-3/5 text-nowrap text-3xl font-bold'>Sports Tab</p>
              <p className='text-[#b575e1]'>In Development</p>
            </div>
          </div>
        </SmallBanner>
        <div className='flex flex-col gap-2'>
          <ListContainterWithTitleHeader title='GAMES'>
            <DropdownListItem title='Casino' imgSrc={`/images/pencil-circle-fill.256x256.png`} arrowIsRightSide={true}>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/games' itemName='Slots' />
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/games' itemName='Live Casino' />
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/games' itemName='Crypto Games' />
            </DropdownListItem>
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/sports' itemName='Sports' />
          </ListContainterWithTitleHeader>
          <ListContainterWithTitleHeader title='MORE'>
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/earn' itemName='Earn' />
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/promotions' itemName='Promotions' />
          </ListContainterWithTitleHeader>
          <ListContainterWithTitleHeader title='USER'>
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/profile' itemName='Profile' />
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/wallet' itemName='Wallet' />
            <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} linkHref='/settings' itemName='Settings' />
          </ListContainterWithTitleHeader>
        </div>
      </div>
      <QuickMenu currentPage="Menu" />
    </div>
  )
}

export default MenuPage