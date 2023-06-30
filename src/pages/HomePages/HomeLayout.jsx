import React from 'react'
import HomeTreding from './HomeTreding'
import HomePage from "./HomePage"
import HomePoplular from './HomePopular'
import HomeLatest from './HomeLatest'

const HomeLayout = () => {
  return (
    <div>
      <HomePage/>
      <HomeTreding/>
      <HomeLatest/>
      <HomePoplular/>
      </div>
  )
}

export default HomeLayout
