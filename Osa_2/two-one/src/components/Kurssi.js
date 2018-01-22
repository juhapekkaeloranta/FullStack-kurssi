import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

const Kurssi = ({ kurssiInfo }) => {
  return (
    <div>
      <Otsikko headerText='Muistiinpanot'/>
      <Sisalto notes={kurssiInfo}/>
    </div>
  )
}

export default Kurssi