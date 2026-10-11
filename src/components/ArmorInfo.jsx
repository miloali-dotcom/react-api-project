import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'

const ArmorInfo = (armor) => {
  const { id } = useParams();

  return (
    <>
      <div className="armor__info--container">
        <div className="row">
          <div className="armor__selected--top">
            <Link to="/" className="armor__link">
            <FontAwesomeIcon icon="arrow-left" />
            </Link>
          </div>
          <div className="armor__selected">
            <figure className="armor__selected--figure">
              <img src={armor.image_id} alt={armor.title} />
            </figure>
            <div className="armor__selected--description">
              <h2 className="armor__selected--title">{armor.title}</h2>
              <p className="armor__selected--artist">{armor.artist_display}</p>
              <p className="armor__selected--date">{armor.date_display}</p>
            </div>
            <div className="armor__summary">
              <h3 className="armor__summary--title">Summary</h3>
              <p className="armor__summary--para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae totam deleniti optio distinctio, tempore itaque eaque quos ipsa dolorem earum commodi ut consequuntur nulla sed minus similique maxime eligendi libero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArmorInfo