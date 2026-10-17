import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

const About = () => {
  return (
    <>
      <Nav />
        <div className="about__container">
          <div className="about__description">
            <h1 className="about__title">
            About this database
          </h1>
            <h3 className="about__para">
              This database is a practice project created by metalsmith and frontend developer <span className="teal">Milo Ali</span> as a way to merge his two main interests; armor and coding, to progress in his website building skills.
            </h3>
          </div>
          <div className="about__image--wrapper">
            <img src="https://api.artic.edu/api/v1/artworks/116363/manifest.json" alt="Field Armor for Man" className="about__image" />
          </div>
        </div>
      <Footer />
    </>
  )
}

export default About