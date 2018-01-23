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
        { name: 'Arto Hellas'},
        { name: 'Aku Ankka'}
      ],
      newName: 'add new..'
    }
  }

  addContact = (event) => {
    event.preventDefault()
    const newPersons = this.state.persons
    const newPerson = this.state.newName
    
    const isDuplicate = newPersons.find(contact => {
      return contact.name === newPerson
    })

    if (isDuplicate) {
      window.alert("Duplicate name - not saved!");
    } else {
      newPersons.push({ name: newPerson })
      this.setState({ persons: newPersons, newName: 'add new..' })
    }
  }

  handleInputChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  emptyInput = (event) => {
    this.setState({ newName: '' })
    console.log(this.contains)
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addContact}>
          <div>
            nimi: 
            <input 
              value={this.state.newName} 
              onChange={this.handleInputChange}
              onClick={this.emptyInput}
            />
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