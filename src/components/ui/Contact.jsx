import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact__container">
        <h3 className="contact__title">
          Issues? Contact <span className="teal">yali@saic.edu</span> for any questions!
        </h3>
      </div>
      <Footer />
    </>
  )
}

export default Contact