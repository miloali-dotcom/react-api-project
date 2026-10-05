import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Landing from './Landing'
import Footer from './Footer'
import Results from './Results'

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