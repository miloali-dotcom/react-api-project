import React from 'react'
import Nav from './Nav'
import Landing from './Landing'
import Footer from './Footer'

const Home = () => {
  const headers = {
    'AIC-User-Agent': 'aic-armory (yali@artic.edu)'
  };

  return (
    <>
      <Nav />
      <Landing />
      <Footer />
    </>
  )
}

export default Home;