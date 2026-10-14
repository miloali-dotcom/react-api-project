import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Results from './Results.jsx'
import Armor from './ui/Armor.jsx'

const Landing = () => {
  const [armor, setArmor] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [filterOnView, setFilterOnView] = useState(true)

  useEffect(() => {
    if (searchTerm) {
      fetchArmorData(searchTerm);
    }
  }, [searchTerm]);

  async function fetchArmorData(searchTerm) {
    if (!searchTerm) return;
    setLoading(true);
    const { data } = await axios.get(`https://api.artic.edu/api/v1/artworks/search?q=${searchTerm}&fields=id,title,artist_display,date_display,image_id,is_on_view`);
    setArmor(data.data);
    setLoading(false);
  }

  const filterArmorByView = (isOnView) => {
    return armor.filter(armor => armor.is_on_view === isOnView);
  }

  const filteredArmor = filterArmorByView(filterOnView);
  
  function onSearch() {
    fetchArmorData(searchTerm);
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
          <div className="filter__container">
            <button onClick={() => setFilterOnView(true)} className="filter__on--view">Only On View</button>
            <button onClick={() => setFilterOnView(false)} className="filter__off--view">Only Off View</button>
          </div>
        </div>
      </div>
      <div className="results__container">
        {filteredArmor.map(armor => (
        <Armor key={armor.id} armor={armor} />
      ))}
      </div>
      <Results results={armor} loading={loading} />
    </>
  )
}

export default Landing