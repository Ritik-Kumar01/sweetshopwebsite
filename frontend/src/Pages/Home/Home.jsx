import React from 'react';
import HeroSection from '../../components/HeroSection'

import Menu from '../../components/Menu'
import Reservation from '../../components/Reservation'

import Qualities from '../../components/Qualities'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
     
      <Menu/>
      <Reservation/>
    
      <Qualities/>
      <Footer/>
    </>
  )
}

export default Home
