import React from 'react'
import Footer from '../components/Footer'
import SportsHeader from '../components/SportsHeader'
import SportsHomeTabButtons from '../components/SportsHomeTabButtons'
import MediumBanner from '../components/MediumBanner'
import SportsQuickBetCardSlides from '../components/SportsQuickBetCardSlides'
import SportsPopularSection from '../components/SportsPopularSection'

const sportsPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
        <SportsHeader />
        <div className='px-4'>
          <SportsHomeTabButtons />
          <MediumBanner />
          <SportsQuickBetCardSlides />
          <SportsPopularSection />
        </div>
        <Footer currentPage='Sports' />
    </div>
  )
}

export default sportsPage