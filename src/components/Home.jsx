import React from 'react'
import Nav from './Nav.jsx'
import Landing from './Landing.jsx'
import Footer from './Footer.jsx'

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