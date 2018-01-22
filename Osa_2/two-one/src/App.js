import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({ notes }) => {
  return (
    <div>
      <Kurssi kurssiInfo={notes}/>
    </div>
  )
}

export default App