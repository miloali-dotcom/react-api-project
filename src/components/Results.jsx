import React, { useState } from 'react'
import Armor from './ui/Armor'

const Results = ({ results = [], loading }) => {
  const [setResults] = useState(results);
  const [armor, setArmor] = useState([]);

  function filterArmor(filter) {
    if (filter === 'all') {
      setResults(results);
    }
    if (filter === 'on view') {
      const filteredResults = results.filter((armor) => armor.is_on_view === true);
      setResults(filteredResults);
    }
    if (filter === 'off view') {
      const filteredResults = results.filter((armor) => armor.is_on_view === false);
      setResults(filteredResults);
    }
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

        {loading 
        ? new Array(6).fill(0).map((_, index) => (
          <Armor key={index} loading={true} />
        ))
        : results.map((armor) => (
          <Armor key={armor.title} armor={armor} />
        ))}
      </div>
    </div>
  )
}

export default Results