import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, buttonText }) => {
  return (
    <button type="button" onClick={handleClick}>
      {buttonText}
    </button>
  )
}

const Statistics = ({ statisticsData }) => {
  if (statisticsData.countRatings > 0) {
    return (
    <div>
      <h2>Statistiikka</h2>
      <Statistic statName='hyvät' statData={statisticsData.good} />
      <Statistic statName='neutraalit' statData={statisticsData.neutral} />
      <Statistic statName='huonot' statData={statisticsData.bad} />
      <Statistic statName='keskiarvo' statData={(statisticsData.sumRatings / statisticsData.countRatings).toFixed(1)} />
      <Statistic statName='positiivisia' statData={(statisticsData.good / statisticsData.countRatings * 100).toFixed(0) + ' %'} />
    </div>
    )
  } else {
    return (
      <div>
        <h2>Statistiikka</h2>
        <p>Yhtään palautetta ei ole annettu</p>
      </div>
    )
  }
}

const Statistic = ({ statName, statData }) => {
  return (
    <p>{statName}: {statData}</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      countRatings: 0,
      sumRatings: 0,
    }
  }

  giveGoodRating = () => {
    this.setState({ good: this.state.good + 1})
    this.addRatingCount()
    this.updateTotalRating(1)
  }

  giveNeutralRating = () => {
    this.setState({ neutral: this.state.neutral + 1})
    this.addRatingCount()
    this.updateTotalRating(0)
  }
  
  giveBadRating = () => {
    this.setState({ bad: this.state.bad + 1})
    this.addRatingCount()
    this.updateTotalRating(-1)
  }

  addRatingCount = () => {
    this.setState({ countRatings: this.state.countRatings + 1})
  }

  updateTotalRating = (amount) => {
    this.setState({ sumRatings: this.state.sumRatings + amount})
  }

  render() {
    return (
      <div>
        <h1>Anna palautetta päivän ruoasta:</h1>
        <Button buttonText='hyvä' handleClick={this.giveGoodRating}/>
        <Button buttonText='neutraali' handleClick={this.giveNeutralRating} />
        <Button buttonText='huono' handleClick={this.giveBadRating} />      
        <Statistics statisticsData={this.state} />
        <p>{this.countAvg}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)