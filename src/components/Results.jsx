import React, { useState } from 'react'
import Armor from './ui/Armor'

const Results = ({ results = [], loading }) => {
  const [filteredResults, setResults] = useState(results);
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
  console.log(results)

  return (
    <>
    <div className="row filter__row">
      <select id="filter" defaultValue="default" onChange={(event) => filterArmor(event.target.value)}> 
          <option value="default" disabled>Sort by...</option>
          <option value="all">All</option>
          <option value="on view">On View</option>
          <option value="off view">Off View</option>
      </select>
    </div>
      <div className="results__container">

        {loading 
        ? new Array(6).fill(0).map((_, index) => (
          <Armor key={index} loading={true} />
        ))
        : results.map((armor) => (
          <Armor key={armor.id} armor={armor} />
        ))}
      </div>
    </>
  )
}

export default Results