import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import Landing from './Landing'
import Footer from './Footer'
import Results from './Results'

const Home = () => {

  return (
    <>
      <Nav />
      <Landing />
      <Results />
      <Footer />
    </>
  )
}

export default Home;