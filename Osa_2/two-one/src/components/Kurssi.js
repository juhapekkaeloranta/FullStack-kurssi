import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'

const Kurssi = ({ courseInfo }) => {
  return (
    <div>
      <Otsikko headerText={courseInfo.courseName}/>
      <Sisalto courseParts={courseInfo.courseParts}/>
    </div>
  )
}

export default Kurssi