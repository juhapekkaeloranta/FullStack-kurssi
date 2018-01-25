import React from 'react'

const Row = ({ rowData }) => {
    return (
      <li>{rowData.name}: {rowData.number}</li>
    )
  }

export default Row