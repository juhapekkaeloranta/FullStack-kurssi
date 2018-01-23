import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const course = {
  courseName: 'Half Stack -sovelluskehitys',
  courseParts: [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10,
      id: 1
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7,
      id: 2
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14,
      id: 3
    },
    {
      nimi: 'Redux',
      tehtavia: 7,
      id: 4
    }
  ]
}


ReactDOM.render(
  <App courseInfo={course} />,
  document.getElementById('root')
)