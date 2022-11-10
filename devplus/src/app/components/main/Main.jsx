import React from 'react'
import Banner from './banner/Banner'
import MainDev from './mainDev/MainDev'
import Partners from './partners/Partners'
import Typical from './Typical/Typical'

const Main = () => {
  return (
    <main>
      <Banner/>
      <Typical/>
      <MainDev/>
      <Partners/>
    </main>
  )
}

export default Main