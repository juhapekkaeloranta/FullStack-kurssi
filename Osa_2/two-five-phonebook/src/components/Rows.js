import React, { cloneElement } from 'react'
import Row from './Row'

const Rows = ({ rowsData, filterWord }) => {

  const containsSubstring = (props) => {
    /** Ruma riippuvuus ulospäin! */
    return props.name.toLowerCase().includes(filterWord.toLowerCase())
  }

  /** tulostajaGeneraattori on funktio, joka palauttaa funktion.
   * Sille annetaan parametrinä string jota halutaan tulostella
   */
  const tulostajaGeneraattori = (tulostettavaSana) => {
    return () => {
      console.log(tulostettavaSana);
    }
  }

  /** Tässä alustetaan kaksi tulostajaFunktiota generaattorin avulla
   * Toinen tulostaa 'foo' ja toinen 'bar'
   */
  const fooTulostajaFunktio = tulostajaGeneraattori('foo')
  const barTulostajaFunktio = tulostajaGeneraattori('bar')
  
  fooTulostajaFunktio() //sama kuin console.log('foo')
  barTulostajaFunktio() //sama kuin console.log('bar')

  /** Jos tulostaa itse tulostajaFunktion niin foo tai bar ei kuitenkaan näy.
   * Seuraavat tulostavat siis täysin saman asian:
   */
  console.log(fooTulostajaFunktio)
  console.log(barTulostajaFunktio)

  const filteredNames = rowsData.filter(containsSubstring)

  return (
    <ul>
      {filteredNames.map(row =>
        <Row key={row.name} rowData={row} />)}
    </ul>
  )
}

export default Rows