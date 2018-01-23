import React from 'react'
import Osa from './Osa'

const Sisalto = ({ courseParts }) => {
  const countExercises = courseParts.reduce(function(sum, part) {
    return sum + part.tehtavia
  }, 0)
  return (
    <ul>
      {courseParts.map(part => <Osa 
        key={part.id} 
        partInfo={part}
      />)}
      <p>Tehtavia yhteensä {countExercises}</p>
    </ul>
  )
}

export default Sisalto