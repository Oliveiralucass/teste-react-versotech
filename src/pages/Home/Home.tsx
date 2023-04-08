import React from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { HomeElement } from '../../components/HomeElement/HomeElement'

export const Home = () => {
  return (
    <div>
      <Header />
      <HomeElement />
      <Footer />
    </div>
  )
}
