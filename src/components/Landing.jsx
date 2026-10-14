import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Results from './Results.jsx'
import Armor from './ui/Armor.jsx'

const Landing = () => {
  const [armor, setArmor] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  async function fetchArmorData(searchTerm) {
    if (!searchTerm) return;
    setLoading(true);
    const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_display,date_display,image_id,is_on_view`);
    setArmor(data.data);
    setLoading(false);
  }
  
  function onSearch() {
    fetchArmorData(searchTerm);
  }

  function onSearchKeyPress(key) {
    if (key === 'Enter') {
      onSearch();
    }
  }

  useEffect(() => {
    if (searchTerm) {
      fetchArmorData(searchTerm);
    }
  }, [searchTerm]);

  function displayArmor(data) {
    return data.map((armor) => (
      <Armor key={armor.id} armor={armor} />
    ));
  }

  return (
    <>
      <div className="container">
        <div className="row header__row">
          <h1 className="header__description">
            Database of Arms and Armor at the <span className="teal">Art Institute of Chicago</span>
          </h1>
          <div className="search-container">
            <input type="text" onChange={(event) => setSearchTerm(event.target.value)} id="searchInput" placeholder="ex: gauntlet" />
            <button onClick={() => onSearch()} id="searchButton" className="search-button">Search</button>
          </div>
        </div>
      </div>
      <Results results={armor} loading={loading} />
    </>
  )
}

export default Landing