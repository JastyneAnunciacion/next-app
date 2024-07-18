import React from 'react'
import QuickMenu from '../../components/quickMenus/QuickMenu'
import SportsHeader from '../../components/sports/SportsHeader'
import SportsHomeTabButtons from '../../components/sports/SportsHomeTabButtons'
import MediumBanner from '../../components/banners/MediumBanner'
import SportsQuickBetCardSlides from '../../components/sports/SportsQuickBetCardSlides'
import SportsPopularSection from '../../components/sports/SportsPopularSection'

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
      <QuickMenu currentPage='Sports' />
    </div>
  )
}

export default sportsPage