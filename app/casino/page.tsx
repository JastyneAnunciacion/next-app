'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BorderedDropdown from '../components/BorderedDropdown'

const CasinoPage = () => {
  return (
    <div> 
        <Header />
          <div className='px-4 mt-4 flex flex-col gap-1'>
            <input placeholder='Sort: Recomended' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
            <input placeholder='Provider All' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
            <input placeholder='Search Game' className='w-full bg-gray-900 h-10 rounded-xl text-white flex items-center pl-4'></input>
          </div>

        <Footer currentPage='Casino' />
    </div>
  )
}

export default CasinoPage