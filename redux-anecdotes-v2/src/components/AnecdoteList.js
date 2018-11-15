import React from 'react'
import Filter from './Filter'
import { connect } from 'react-redux'
import { voteAnecdote,anecdoteInitialization } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  componentDidMount = async () => {
    this.props.anecdoteInitialization()
  }

  voteAnecdote = (anecdote)  => async (e) => {
    this.props.voteAnecdote(anecdote)
    this.props.notify(`you voted '${anecdote.content}'`, 5)
  }

  render() {
    const { anecdotesToShow } = this.props
    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {anecdotesToShow.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick= { this.voteAnecdote(anecdote) } >
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}
const anecdotesToShow =(anecdotes, filter) => {
  return anecdotes
    .filter(a => filter.length === 0 || a.content.includes(filter) )
    .sort((a, b) => b.votes - a.votes)
}
const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state.anecdotes,state.filter)
  }
}
export default connect(mapStateToProps,{ voteAnecdote, notify ,anecdoteInitialization })(AnecdoteList)
