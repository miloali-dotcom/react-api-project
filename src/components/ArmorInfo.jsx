import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

const ArmorInfo = () => {
  const { id } = useParams();
  const location = useLocation();
  const armor = location.state?.armor;
  const { image_id, title, artist_display, date_display } = armor || {};
  const imageUrl = image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg` : '';

  

  return (
    <>
    <Nav />
      <div className="armor__info--container">
        <div className="row">
          <div className="armor__selected--top">
            <Link to="/" className="armor__link">
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
            <Link to="/" className="armor__link">
            <h2 className="armor__selected--title--top">Back to Search</h2>
            </Link>
          </div>
        </div>
          <div className="armor__selected">
            <figure className="armor__selected--figure">
              {image_id && <img src={imageUrl} alt={armor.title} className="armor__selected--img" />}
            </figure>
            <div className="armor__selected--description">
              <h2 className="armor__selected--title">{armor.title}</h2>
              <p className="armor__selected--artist">{armor.artist_display}</p>
              <p className="armor__selected--date">{armor.date_display}</p>
              <div className="armor__summary">
              <h3 className="armor__summary--title">Summary</h3>
              <p className="armor__summary--para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae totam deleniti optio distinctio, tempore itaque eaque quos ipsa dolorem earum commodi ut consequuntur nulla sed minus similique maxime eligendi libero.
              </p>
              <p className="armor__summary--para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae totam deleniti optio distinctio, tempore itaque eaque quos ipsa dolorem earum commodi ut consequuntur nulla sed minus similique maxime eligendi libero.
              </p>
            </div>
            </div>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default ArmorInfo