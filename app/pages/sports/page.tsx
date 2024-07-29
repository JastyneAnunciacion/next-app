import React from 'react'
import QuickMenu from '../../components/quickMenus/QuickMenu'
import SportsHeader from '../../components/sports/SportsHeader'
import SportsHomeTabButtons from '../../components/sports/SportsHomeTabButtons'
import SportsQuickBetCardSlides from '../../components/sports/SportsQuickBetCardSlides'
import SportsPopularSection from '../../components/sports/SportsPopularSection'
import SportsBanner from '@/app/components/sports/SportsBanner'

const sportsPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
      <SportsHeader />
      <div className='px-4'>
        <SportsHomeTabButtons />
        <div className='w-full h-72'>
          <SportsBanner />
        </div>
        <SportsQuickBetCardSlides />
        <SportsPopularSection />
      </div>
      <QuickMenu currentPage='Sports' />
    </div>
  )
}

export default sportsPage