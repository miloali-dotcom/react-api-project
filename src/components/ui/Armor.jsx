import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Armor = ({ armor }) => {
  const [img, setImg] = useState(false);

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = `https://www.artic.edu/iiif/2/${armor.image_id}/full/200,/0/default.jpg`;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
        setImg(image);
        }
      }, 300);
    };
    return () => {
    mountedRef.current = false;
  };
  })
  
  return (
    <div className="armor-container">
      {img ? (
        <>
          <Link to={`/armor/${armor.id}`}>
            <img src={`https://www.artic.edu/iiif/2/${armor.image_id}/full/200,/0/default.jpg`} alt={armor.title} className="armor-image" />
          </Link>
          <h3 className="armor-title">
            <Link to={`/armor/${armor.id}`} className="armor__title--link">{armor.title}</Link>
          </h3>
          <h4 className="artist-name">{armor.artist_display}</h4>
          <p className="date-made">{armor.date_display}</p>
        </>
      ) : (
        <>
          <div className="armor-img--skeleton"></div>
          <div className="armor-title--skeleton"></div>
          <div className="artist-name--skeleton"></div>
          <div className="date-made--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Armor