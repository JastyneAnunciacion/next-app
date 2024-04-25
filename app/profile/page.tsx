'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState } from 'react'
import languages from '../components/language-list.json'
import basePath from '../utilities/basepath'
import Level from '../components/Level'
import Statistics from '../components/Statistics'
import Cashback from '../components/Cashback'
import TransactionHistoryTable from '../components/TransactionHistoryTable'
import MostWageredGames from '../components/MostWageredGames'

interface ProfileProps {
  username: string,
  dateJoined: string,
}

const items = languages.map(language => ({
  content: language.Language,
  onClick: () => {
    console.log(`Selected language: ${language.Language}`);
  }
}));

const ProfilePage = () => {
  const [option, changeOption] = useState(0);

  return (
    <div>
      <Header />
      <div className='px-4 pt-4'>
        <p className='font-bold text-lg'>Profile</p>
        <div className='flex items-center gap-3 mt-10 mb-3'>
          <div>
            <Image src={`${basePath}/images/blank-account-icon.png`} alt='Large Profile Icon' width={90} height={90}></Image>
          </div>
          <div className='w-full'>
            <p className='font-bold text-lg'>Username</p>
            <Level />
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <Statistics />
          <Cashback />
          <MostWageredGames />
          <TransactionHistoryTable />
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default ProfilePage