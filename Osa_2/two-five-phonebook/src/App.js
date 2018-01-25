import React from 'react';
import './index.css'
import Rows from './components/Rows'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '0400-Arto'},
        { name: 'Aku Ankka', number: '0800-Aku'}
      ],
      newName: 'add new..',
      newNumber: '040-12312300',
      filterWord: ''
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

  handleFilter = (event) => {
    this.setState({ filterWord: event.target.value })
  }

  resetStateVariable = (muuttuja) => {
    return (event) => {
      console.log('tyhjaa ', muuttuja)
      this.setState({ [muuttuja]: '' })
    }
  }

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>

          <div>
            Haku: 
            <input 
              value={this.state.filterWord} 
              onChange={this.handleFilter}
            />
          </div>

        <h2>Lisää uusi</h2>

        <form onSubmit={this.addContact}>
          <div>
            nimi: 
            <input 
              value={this.state.newName} 
              onChange={this.handleInputChange}
              onClick={this.resetStateVariable('newName')}
            />
          </div>
          <div>
            puh: 
            <input 
              value={this.state.newNumber} 
              onChange={this.handleNumberInputChange}
              onClick={this.resetStateVariable('newNumber')}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        <Rows rowsData={this.state.persons} filterWord={this.state.filterWord} />
      </div>
    )
  }
}

export default App