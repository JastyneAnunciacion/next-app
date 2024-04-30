import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PromotionTempate from '../components/PromotionTempate'

const PromotionsPage = () => {
  return (
    <div className="w-[100vw] max-w-[100%] h-[100vh]">
        <Header />
        <div className='p-4 flex flex-col gap-5'>
            <PromotionTempate title='Example Title 1' subTitle='Feeling down on your luck this week?' endDate={new Date('2024-12-08T01:03:20')}  />
            <PromotionTempate title='Example Title 2' subTitle='Feeling down on your luck this week?' endDate={new Date('2026-12-08T01:11:34')}  />
            <PromotionTempate title='Example Title 3' subTitle='Feeling down on your luck this week?' endDate={new Date('2025-12-08T01:16:35')}  />
        </div>
        <Footer />
    </div>
  )
}

export default PromotionsPage