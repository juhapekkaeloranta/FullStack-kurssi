import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
  console.log(props)
  return (
    <h1>{props.kurssinTiedot.nimi}</h1>
  )
}

const Osa = (props) => {
  return (
    <p>{props.osanNimi} {props.tehtLkm}</p>
  )
}

const Sisalto = (props) => {
  return (
    <div>
      <Osa osanNimi={props.kurssinTiedot.osat[0].nimi} tehtLkm={props.kurssinTiedot.osat[0].tehtavia}></Osa>
      <Osa osanNimi={props.kurssinTiedot.osat[1].nimi} tehtLkm={props.kurssinTiedot.osat[1].tehtavia}></Osa>
      <Osa osanNimi={props.kurssinTiedot.osat[2].nimi} tehtLkm={props.kurssinTiedot.osat[2].tehtavia}></Osa>
    </div>
  )
}

const Yhteensa = (props) => {
  const tehtaviaYhteensa = 
    props.kurssinTiedot.osat[0].tehtavia +
    props.kurssinTiedot.osat[1].tehtavia +
    props.kurssinTiedot.osat[2].tehtavia
  return (
    <p>yhteensä {tehtaviaYhteensa} tehtävää</p>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  return (
    <div>
      <Otsikko kurssinTiedot={kurssi} />
      <Sisalto kurssinTiedot={kurssi}/>
      <Yhteensa kurssinTiedot={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)