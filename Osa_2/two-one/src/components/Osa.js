import React from 'react'

const Osa = ({ partInfo }) => {
  return (
    <li>{partInfo.nimi} {partInfo.tehtavia}</li>
  )
}

export default Osa