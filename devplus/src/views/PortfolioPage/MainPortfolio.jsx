import React from 'react'
import BannerCommon from '../../app/components/main/banner/common/BannerCommon'
import PortfolioPage from './PortfolioPage'

const MainPortfolio = () => {
  return (
    <main>
      <BannerCommon id={5}/>
      <PortfolioPage/>
    </main>
  )
}

export default MainPortfolio