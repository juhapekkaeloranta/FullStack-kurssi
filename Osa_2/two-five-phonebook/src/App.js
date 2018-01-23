import React from 'react';

const Row = ({ rowData }) => {
  return (
    <li>{rowData.name}</li>
  )
}

const Rows = ({ rowsData }) => {
  return (
    <ul>
      {rowsData.map(row => <Row key={row.name} rowData={row}/>)}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', id: 1},
        { name: 'Aku Ankka', id: 2}
      ],
      newName: ''
    }
  }

  addContact = (event) => {
    event.preventDefault()
    console.log('addContact called!')
    console.log(event)
  }


  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addContact}>
          <div>
            nimi: <input />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        <Rows rowsData={this.state.persons} />
      </div>
    )
  }
}

export default App