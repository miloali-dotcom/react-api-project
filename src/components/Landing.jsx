import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Results from './Results'

const Landing = () => {
  const [armor, setArmor] = useState([])
  const [searchTerm, setSearchTerm] = useState([])
  const [loading, setLoading] = useState(true)

  function onSearch() {
    setLoading(true);
    fetchArmorData(searchTerm);
  }

  async function fetchArmorData(searchTerm) {
    const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=title,artist_display,date_display,image_id,is_on_view`);
    setArmor(data);
    setLoading(false);
  }

  function onSearchKeyPress(key) {
    if (key === 'Enter') {
      onSearch();
    }
  }

  useEffect(() => {
    fetchArmorData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row header__row">
          <h1 className="header__description">
            Database of Arms and Armor at the <span className="teal">Art Institute of Chicago</span>
          </h1>
          <div className="search-container">
            <input type="text" id="searchInput" placeholder="ex: gauntlet" />
            <button onClick={() => onSearch()} id="searchButton" className="search-button">Search</button>
          </div>
        </div>
      </div>
      <Results results={armor.data} loading={loading} />
    </>
  )
}

export default Landing