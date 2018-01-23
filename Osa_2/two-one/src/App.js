import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({ courseInfo }) => {
  return (
    <div>
      <Kurssi courseInfo={courseInfo}/>
    </div>
  )
}

export default App