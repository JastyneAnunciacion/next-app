import React from 'react'
import QuickMenu from '../../components/quickMenus/QuickMenu'
import Header from '../../components/Header'
import PromotionTempate from '../../components/PromotionTempate'
import MainComponents from '../../components/MainComponents'

const PromotionsPage = () => {
  return (
    <MainComponents>
      <div className='max-w-[91.88%] w-full flex flex-col gap-5'>
        <PromotionTempate title='Example Title 1' subTitle='Feeling down on your luck this week?' endDate={new Date('2024-12-08T01:03:20')} />
        <PromotionTempate title='Example Title 2' subTitle='Feeling down on your luck this week?' endDate={new Date('2026-12-08T01:11:34')} />
        <PromotionTempate title='Example Title 3' subTitle='Feeling down on your luck this week?' endDate={new Date('2025-12-08T01:16:35')} />
      </div>
    </MainComponents>
  )
}

export default PromotionsPage