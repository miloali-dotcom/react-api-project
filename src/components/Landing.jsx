import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Landing = () => {
  const [armor, setArmor] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const [loading, setLoading] = useState(true)


  async function fetchArmorData(searchTerm) {
    const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=title,artist_display,date_display,image_id,is_on_view`);
    setArmor(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchArmorData();
  }, []);

  function onSearchKeyPress(key) {
    if (key === 'Enter') {
      fetchArmorData(searchTerm);
    }
  }

  return (
    <>
      <div className="container">
        <div className="row header__row">
          <h1 className="header__description">
            Database of Arms and Armor at the <span className="teal">Art Institute of Chicago</span>
          </h1>
          <div className="search-container">
            <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} onKeyPress={(event) => onSearchKeyPress(event.key)} id="searchInput" placeholder="ex: gauntlet" />
            <button onClick={() => fetchArmorData(searchTerm)} id="searchButton" className="search-button">Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing