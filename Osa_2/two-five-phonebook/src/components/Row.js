import React from 'react'

const Row = ({ rowData, deleteRow }) => {
    return (
      <li>
        {rowData.name}: {rowData.number}
        <button value={rowData.name} onClick={deleteRow}>Poista</button>
      </li>
    )
  }

export default Row