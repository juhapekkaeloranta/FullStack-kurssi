import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const notes = [
  {
    id: 1,
    content: 'HTML on helppoa',
    date: '2017-12-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Selain pystyy suorittamaan vain javascriptiä',
    date: '2017-12-10T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
    date: '2017-12-10T19:20:14.298Z',
    important: true
  }
]

const kurssi = {
  nimi: 'Half Stack -sovelluskehitys',
  osat: [
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
    }
  ]
}


ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)