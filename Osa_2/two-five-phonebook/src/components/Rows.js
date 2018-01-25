import React from 'react'
import Row from './Row'

const Rows = ({ rowsData, filterWord }) => {

  const containsSubstring = (props) => {
    /** Ruma riippuvuus ulospäin! */
    return props.name.toLowerCase().includes(filterWord.toLowerCase())
  }

  const filteredNames = rowsData.filter(containsSubstring)

  return (
    <ul>
      {filteredNames.map(row =>
        <Row key={row.name} rowData={row} />)}
    </ul>
  )
}

export default Rows