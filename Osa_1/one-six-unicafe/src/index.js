import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, buttonText }) => {
  return (
    <button type="button" onClick={handleClick}>
      {buttonText}
    </button>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyvat: 0,
      neutraalit: 0,
      huonot: 0
    }
    this.annaHyvaArvio = this.annaHyvaArvio.bind(this)
    this.annaNeutraaliArvio = this.annaNeutraaliArvio.bind(this)
    this.annaHuonoArvio = this.annaHuonoArvio.bind(this)
  }

  annaHyvaArvio() {
    this.setState({ hyvat: this.state.hyvat + 1})
  }

  annaNeutraaliArvio() {
    this.setState({ neutraalit: this.state.neutraalit + 1})
  }
  
  annaHuonoArvio() {
    this.setState({ huonot: this.state.huonot + 1})
  }


  render() {
    return (
      <div>
        <h1>Anna palautetta päivän ruoasta:</h1>
        <Button buttonText='hyvä' handleClick={this.annaHyvaArvio}/>
        <Button buttonText='neutraali' handleClick={this.annaNeutraaliArvio} />
        <Button buttonText='huono' handleClick={this.annaHuonoArvio} />
        <h2>Statistiikka</h2>
        <div><p>hyvät: {this.state.hyvat}</p></div>
        <div><p>neutraalit: {this.state.neutraalit}</p></div>
        <div><p>huonot: {this.state.huonot}</p></div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)