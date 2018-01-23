import React from 'react'
import Kurssi from './components/Kurssi'

const App = ({ courses }) => {
  return (
    <div>
      <h1>Kurssit:</h1>
      {courses.map(course =>  <Kurssi
        courseInfo={course}
      />
      )}
    </div>
  )
}

export default App