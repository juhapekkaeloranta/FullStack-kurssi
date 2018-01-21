import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, buttonText }) => {
  return (
    <button type="button" onClick={handleClick}>
      {buttonText}
    </button>
  )
}

const VoteCount = ({ votes }) => {
  return (
    <p>
      has {votes} votes
    </p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  nextAnecdote = () => {
    this.setState(
      { selected: Math.floor(Math.random()*6)}
    );
  }

  vote = (voteId) => {
    return () => {
      let newVotes = this.state.votes
      console.log('vote for ' + voteId)
      newVotes[voteId] = newVotes[voteId] + 1
      console.log(newVotes)
    }
  }
  

  render() {
    return (
      <div>
        <h1>Random anecdote:</h1>
        {this.props.anecdotes[this.state.selected]}
        <br/>
        <VoteCount votes={this.state.votes[this.state.selected]} />
        <br/>
        <Button buttonText='Vote' handleClick={this.vote(this.state.selected)}/>
        <Button buttonText='Next' handleClick={this.nextAnecdote}/>
        <br/>
        <h2>Most votes:</h2>
        {this.props.anecdotes[this.state.votes.indexOf(Math.max(...this.state.votes))]}
        <VoteCount votes={this.state.votes[this.state.votes.indexOf(Math.max(...this.state.votes))]} />
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)