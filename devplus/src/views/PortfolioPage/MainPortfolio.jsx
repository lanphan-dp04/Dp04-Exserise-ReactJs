import React from 'react'
import BannerCommon from '../../app/components/main/banner/common/BannerCommon'
import Portfolio from './Portfolio'

const MainPortfolio = () => {
  return (
    <main>
      <BannerCommon id={5}/>
      <Portfolio/>
    </main>
  )
}

export default MainPortfolio