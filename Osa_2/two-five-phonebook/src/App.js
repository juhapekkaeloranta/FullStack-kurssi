import React from 'react';

const Row = (props) => {
  console.log(props.key, props.content)
  return (
    <li key={props.content}>{props.content}</li>
  )
}

const Rows = ({ rowData }) => {
  return (
    <ul>
      {rowData.map(row => (<Row key={row.name} content={row.name}/>))}
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
        { name: 'Aku Ankka'}
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
        <Rows rowData={this.state.persons} />
      </div>
    )
  }
}

export default App