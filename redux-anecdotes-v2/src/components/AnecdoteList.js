import React from 'react'
import Filter from './Filter'
import { connect } from 'react-redux'
import { voteAnecdote,anecdoteInitialization } from '../reducers/anecdoteReducer'
import { voteNotification, deleteNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
class AnecdoteList extends React.Component {
  componentDidMount = async () => {

    const anecdotes =await anecdoteService.getAll()
    this.props.anecdoteInitialization(anecdotes)
  }

  voteAnecdote = (id) => (e) => {
    const anecdote = this.props.anecdotesToShow.find(a => a.id === id)

    this.props.voteAnecdote(id)
    this.props.voteNotification(anecdote.content)
    setTimeout(() => {
      this.props.deleteNotification()
    }, 5000)
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
              <button onClick= { this.voteAnecdote(anecdote.id) } >
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
export default connect(mapStateToProps,{ voteAnecdote, voteNotification, deleteNotification ,anecdoteInitialization })(AnecdoteList)
