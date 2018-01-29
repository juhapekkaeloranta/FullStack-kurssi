import React from 'react'
import Row from './Row'

const Rows = ({ rowsData, filteringTerm, deleteRow }) => {

  const includesGenerator = (substringToFind) => {
    return (textToSearchFrom) => {
      return (
        textToSearchFrom.toLowerCase().includes(substringToFind.toLowerCase())
      )
    }
  }

  const includesFilteringTerm = includesGenerator(filteringTerm)

  const personFilter = ({name}) => {
    return (
      includesFilteringTerm(name)
    )
  }

  const filteredNames = rowsData.filter(personFilter)

  return (
    <ul>
      {filteredNames.map(row =>
        <Row key={row.name} rowData={row} deleteRow={deleteRow}/>)}
    </ul>
  )
}

export default Rows