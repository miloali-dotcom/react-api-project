import React from 'react'
import { Link } from 'react-router-dom'

const Armor = ({ armor, loading }) => {
  if (loading || !armor) {
    return (
      <div className="armor-container">
        <div className="armor-img--skeleton"></div>
        <div className="armor-title--skeleton"></div>
        <div className="artist-name--skeleton"></div>
        <div className="date-made--skeleton"></div>
      </div>
    )
  }
  const { image_id } = armor
  const imageUrl = image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg` : '';

  return (
    <div className="armor-container" key={armor.id}>
          <Link to={`/armor/${armor.id}`} state={{ armor }}>
            {image_id && <img src={imageUrl} alt={armor.title} className="armor-image" />}
          </Link>
          <h3 className="armor-title">
            <Link to={`/armor/${armor.id}`} state={{ armor }} className="armor__title--link">{armor.title}</Link>
          </h3>
          <h4 className="artist-name">{armor.artist_display}</h4>
          <p className="date-made">{armor.date_display}</p>
    </div>
  );
};

export default Armor