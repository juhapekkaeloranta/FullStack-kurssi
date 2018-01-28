import React, { Component } from 'react';
import SearchField from './components/SearchField'
import Rows from './components/Rows'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filterWord: 'fi'
    }
  }

  componentWillMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('Success!')
        this.setState({countries: response.data})
    })
  }

  saveEventTargetValueToState = (nameOfStateVar) => {
    return (event) => {
      console.log(event.target)
      this.setState({ [nameOfStateVar]: event.target.value })
    }
  }

  saveEventTargetNameToState = (nameOfStateVar) => {
    return (event) => {
      this.setState({ [nameOfStateVar]: event.target.name})
    }
  }

  render() {
    return (
      <div>
        <h1>Countries of the world</h1>
        <SearchField
          promptText='find countries: '
          hintText={this.state.filterWord}
          handleChange={this.saveEventTargetValueToState('filterWord')}
        />
        <Rows
          rowsData={this.state.countries}
          filteringTerm={this.state.filterWord}
          handleLinkClick={this.saveEventTargetNameToState('filterWord')}
        />
      </div>
    );
  }
}

export default App;
