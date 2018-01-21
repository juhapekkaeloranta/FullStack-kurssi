import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssiNimi}</h1>
    )
}

const Osa = (props) => {
    return (
        <p>{props.osanNimi} {props.tehtLkm}</p>
    )
}

const Sisalto = (props) => {
    console.log(props.osienTiedot[0])


    return (
        <div>
            <Osa osanNimi={props.osienTiedot[0].osanNimi} tehtLkm={props.osienTiedot[0].osanTehtLkm}></Osa>
            <Osa osanNimi={props.osienTiedot[1].osanNimi} tehtLkm={props.osienTiedot[1].osanTehtLkm}></Osa>
            <Osa osanNimi={props.osienTiedot[2].osanNimi} tehtLkm={props.osienTiedot[2].osanTehtLkm}></Osa>
        </div>
    )
}

const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.tehtavia} tehtävää</p>
    )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  const osat = [
      {
        "osanNimi": osa1,
        "osanTehtLkm": tehtavia1
      },
      {
        "osanNimi": osa2,
        "osanTehtLkm": tehtavia2
      },
      {
        "osanNimi": osa3,
        "osanTehtLkm": tehtavia3
      }
    ]

  const yhteensa = tehtavia1 + tehtavia2 + tehtavia3

  return (
    <div>
      <Otsikko kurssiNimi={kurssi} />
      <Sisalto osienTiedot={osat}/>
      <Yhteensa tehtavia={yhteensa}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)