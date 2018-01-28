import React from 'react'

const Rows = ({ rowsData, filteringTerm }) => {

  const includesGenerator = (substringToFind) => {
    return (textToSearchFrom) => {
      //console.log('searching for:', substringToFind, 'in', textToSearchFrom)
      return (
        textToSearchFrom.toLowerCase().includes(substringToFind.toLowerCase())
      )
    }
  }

  const includesFilteringTerm = includesGenerator(filteringTerm)

  const countryFilter = ({name}) => {
    return (
      includesFilteringTerm(name)
    )
  }

  const filteredRows = rowsData.filter(countryFilter)

  if (filteredRows.length > 10) {
    console.log('liikaa!')
    return (
      <p>too many results!</p>
    )
  } else {
    console.log('näytetään!')
    return (
      <ul>
        {filteredRows.map(row =>
          <li key={row.name}>{row.name}</li>)}
      </ul>
    )
  }
  
}

export default Rows