import React from 'react';

const Row = ({ rowData }) => {
  return (
    <li>{rowData.name}: {rowData.number}</li>
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
        { name: 'Arto Hellas', number: '0400-Arto'},
        { name: 'Aku Ankka', number: '0800-Aku'}
      ],
      newName: 'add new..',
      newNumber: '040-12312300'
    }
  }

  addContact = (event) => {
    event.preventDefault()
    const tempPersons = this.state.persons
    const tempPerson = this.state.newName
    const tempNumber = this.state.newNumber
    
    const isDuplicate = tempPersons.find(contact => {
      return contact.name === tempPerson
    })

    if (isDuplicate) {
      window.alert("Duplicate name - not saved!");
    } else {
      tempPersons.push({ name: tempPerson, number: tempNumber })
      this.setState({ 
        persons: tempPersons, 
        newName: 'add new..' })
    }
  }

  handleInputChange = (event) => {
    this.setState({ newName: event.target.value,})
  }

  handleNumberInputChange = (event) => {
    this.setState({ newNumber: event.target.value,})
  }

  emptyInput = (event) => {
    this.setState({ newName: '' })
  }

  emptyNumberInput = (event) => {
    this.setState({ newNumber: '' })
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
            puh: 
            <input 
              value={this.state.newNumber} 
              onChange={this.handleNumberInputChange}
              onClick={this.emptyNumberInput}
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