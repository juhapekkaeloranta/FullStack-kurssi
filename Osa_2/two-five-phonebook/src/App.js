import React from 'react';
import './index.css'
import Rows from './components/Rows'
import SearchField from './components/SearchField';
import InputField from './components/InputField';
import BackendService from './Services/BackendService'

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
      this.saveNewPerson({ name: tempPerson, number: tempNumber })
    }
  }

  saveEventTargetToState = (nameOfStateVar) => {
    return (event) => {
      console.log(nameOfStateVar)
      this.setState({ [nameOfStateVar]: event.target.value })
    }
  }

  resetStateVariable = (nameOfStateVar) => {
    return (event) => {
      this.setState({ [nameOfStateVar]: '' })
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
    this.getAllContacts()
  }

  getAllContacts() {
    BackendService
      .getAll()
      .then(response => {
        console.log('getAll finished with status:', response.status)
        this.setState({ persons: response.data })
      })
  }

  saveNewPerson(newPerson) {
    BackendService
      .create(newPerson)
      .then(response => {
        console.log('save done with:', response.status);
        this.getAllContacts()
      })
  }

  deletePerson() {
    return (event) => {
      const nameToDelete = event.target.value
      window.confirm('Poistetaanko '.concat(nameToDelete))
      console.log('deleting:', nameToDelete);
      BackendService
        .deleteByName(nameToDelete)
        .then(response => {
          console.log('delete done with:', response.status);
          this.getAllContacts()
      })
      
    }
  }


  /* Note: How to reduce amount of fields in InputField?
  */
  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <SearchField
          text={this.state.filterWord}
          handleChange={this.saveEventTargetToState('filterWord')}
        />
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addContact}>
          <InputField 
            textField='nimi'
            stateValue={this.state.newName}
            handleChange={this.saveEventTargetToState('newName')}
            handleClick={this.resetStateVariable('newName')}
          />
          <InputField 
            textField='puh:'
            stateValue={this.state.newNumber}
            handleChange={this.saveEventTargetToState('newNumber')}
            handleClick={this.resetStateVariable('newNumber')}
          />
          <button type="submit">lisää</button>
        </form>
        <h2>Numerot</h2>
        <Rows 
          rowsData={this.state.persons}
          filteringTerm={this.state.filterWord}
          deleteRow={this.deletePerson()}
        />
      </div>
    )
  }
}

export default App