import React from 'react'

const Row = ({ rowData, deleteRow }) => {
    return (
      <li>
        {rowData.name}: {rowData.number}
        <button name={rowData.id} onClick={deleteRow}>Poista</button>
      </li>
    )
  }

export default Row