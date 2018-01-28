import React, { Component } from 'react';
import SearchField from './components/SearchField'
import Rows from './components/Rows'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      filterWord: 'Finland'
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

  saveEventTargetToState = (nameOfStateVar) => {
    return (event) => {
      this.setState({ [nameOfStateVar]: event.target.value })
    }
  }

  render() {
    return (
      <div>
        <h1>Countries of the world</h1>
        <SearchField
          promptText='find countries: '
          hintText={this.state.filterWord}
          handleChange={this.saveEventTargetToState('filterWord')}
        />
        <Rows
          rowsData={this.state.countries}
          filteringTerm={this.state.filterWord}
        />
      </div>
    );
  }
}

export default App;
