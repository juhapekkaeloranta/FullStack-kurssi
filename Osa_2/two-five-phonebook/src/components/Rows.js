import React, { cloneElement } from 'react'
import Row from './Row'

const Rows = ({ rowsData, filterWord }) => {

  const comparisonGenerator = (substringToFind) => {
    return (textToSearchFrom) => {
      console.log('trying to find', substringToFind, 'from', textToSearchFrom)
      const wasFound = textToSearchFrom.includes(substringToFind)
      return (
        wasFound
      )
    }
  }

  const fooFinder = comparisonGenerator('foo')

  console.log(fooFinder('barbarfoo'))

  const filteredNames = rowsData

  return (
    <ul>
      {filteredNames.map(row =>
        <Row key={row.name} rowData={row} />)}
    </ul>
  )
}

export default Rows