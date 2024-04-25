'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SmallBanner from '../components/SmallBanner'
import TextLink from '../components/TextLink'
import Dropdown from '../components/Dropdown'
import Serachbar from '../components/Serachbar'
import ListContainterWithTitleHeader from '../components/ListContainterWithTitleHeader'
import ListItem from '../components/ListItem'
import basePath from '../utilities/basepath'
import DropdownListItem from '../components/DropdownListItem'

const MenuPage = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-center px-3 pt-3 flex-col gap-2'>
          <Serachbar placeholderText='Find a Game' />
          <SmallBanner>
            <div className='text-white flex flex-col gap-3 text-sm'>
              <p className='w-3/5 text-wrap'>Site Promotions and Other Bonuses Offered at PHX Gamble</p>
              <p className='text-xl font-bold'>PHX.GAMBLE</p>
            </div>
          </SmallBanner>
          <div className=''>
            <ListContainterWithTitleHeader title='GAMES'>
              <DropdownListItem title='Casino' imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} arrowIsRightSide={true}>
                <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Slots'/>
                <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Live Casino'/>
                <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Crypto Games'/>
              </DropdownListItem>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Sports'/>
            </ListContainterWithTitleHeader>
            <ListContainterWithTitleHeader title='MORE'>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Earn'/>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Promotions'/>
            </ListContainterWithTitleHeader>
            <ListContainterWithTitleHeader title='USER'>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Profile'/>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Wallet'/>
              <ListItem imgSrc={`${basePath}/images/pencil-circle-fill.256x256.png`} itemName='Settings'/>
            </ListContainterWithTitleHeader>
          </div>
        </div>
        <Footer currentPage="Menu"/>
    </div>
  )
}

export default MenuPage