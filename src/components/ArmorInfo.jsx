import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

const ArmorInfo = ({ armor }) => {
  const { id } = useParams();
  const { image_id, title, artist_display, date_display } = armor || {};
  const imageUrl = image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/850,/0/default.jpg` : '';

  console.log(armor);

  return (
    <>
    <Nav />
      <div className="armor__info--container">
        <div className="row">
          <div className="armor__selected--top">
            <Link to="/" className="armor__link">
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
          </div>
        </div>
          <div className="armor__selected">
            <figure className="armor__selected--figure">
              {image_id && <img src={imageUrl} alt={title} />}
            </figure>
            <div className="armor__selected--description">
              <h2 className="armor__selected--title">{title}</h2>
              <p className="armor__selected--artist">{artist_display}</p>
              <p className="armor__selected--date">{date_display}</p>
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