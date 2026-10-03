import React, { useState } from 'react'
import Armor from './ui/Armor'

const Results = ({ results: initialResults }) => {
  const [results, setResults] = useState([initialResults]);

  function filterArmor(filter) {
    if (filter === 'all') {
      setResults(initialResults);
    }
    if (filter === 'on view') {
      const filteredResults = initialResults.filter((armor) => armor.is_on_view === true);
      setResults(filteredResults);
    }
    if (filter === 'off view') {
      const filteredResults = initialResults.filter((armor) => armor.is_on_view === false);
      setResults(filteredResults);
    }
  }

  function displayArmor(data) {
    return data.map((armor) => (
      <Armor key={armor.id} armor={armor} />
    ));
  }

  return (
    <div>
      <div className="resultsContainer">
        <select id="filter" defaultValue="default" onChange={(event) => filterArmor(event.target.value)}> 
          <option value="default" disabled>Sort by...</option>
          <option value="all">All</option>
          <option value="on view">On View</option>
          <option value="off view">Off View</option>
        </select>
      </div>
    </div>
  )
}

export default Results