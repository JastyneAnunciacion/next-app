import React from 'react'
import Footer from '../components/Footer'
import SportsHeader from '../components/SportsHeader'

const sportsPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
        <SportsHeader />
        <Footer currentPage='Sports' />
    </div>
  )
}

export default sportsPage