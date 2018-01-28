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

  if (filteredRows.length === 1) {
    console.log('showing just one!')
    const country = filteredRows[0]
    return (
      <div>
        <h1>{country.name} {country.nativeName}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <img src={country.flag} alt='Flag' width='150'></img>
      </div>
    )
  } else if (filteredRows.length > 10) {
    console.log('too many to show!')
    return (
      <p>too many results!</p>
    )
  } else {
    console.log('showing 1-10!')
    return (
      <ul>
        {filteredRows.map(row =>
          <li key={row.name}>{row.name}</li>)}
      </ul>
    )
  }
  
}

export default Rows