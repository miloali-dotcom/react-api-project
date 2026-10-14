import React from 'react'
import Armor from './ui/Armor.jsx'

const Results = ({ results = [], loading }) => {

  return (
    <>
    <div className="row filter__row">
      <h3 className="filter__end">All Results</h3>
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