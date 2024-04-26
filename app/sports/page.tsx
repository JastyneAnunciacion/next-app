import React from 'react'
import Footer from '../components/Footer'
import SportsHeader from '../components/SportsHeader'

const sportsPage = () => {
  return (
    <div>
        <SportsHeader />
        <Footer currentPage='Sports' />
    </div>
  )
}

export default sportsPage