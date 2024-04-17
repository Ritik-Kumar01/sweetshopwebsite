import React from 'react'
import HeroSection from '../../components/HeroSection'
// import About from '../../components/About'
import Menu from '../../components/Menu'
import Reservation from '../../components/Reservation'
// import WhoAreWe from '../../components/WhoAreWe'
// import Team from '../../components/Team'
import Qualities from '../../components/Qualities'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      {/* <About/> */}
      <Menu/>
      <Reservation/>
      {/* <WhoAreWe/> */}
      {/* <Team/> */}
      <Qualities/>
      <Footer/>
    </>
  )
}

export default Home
