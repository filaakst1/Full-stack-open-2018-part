import React from 'react'
import PropTypes from 'prop-types'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, deleteNotification } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
  voteAnecdote = (id) => (e) => {
    console.log('Vote click')
    const { anecdotes } = this.context.store.getState()
    const anecdote = anecdotes.find(a => a.id === id)

    this.context.store.dispatch(
      voteAnecdote(id)
    )
    this.context.store.dispatch(
      voteNotification(anecdote.content)
    )
    setTimeout(() => {
      this.context.store.dispatch(
        deleteNotification()
      )
    }, 5000)
  }
  render() {
    const anecdotes = this.context.store.getState().anecdotes
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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
AnecdoteList.contextTypes = {
  store: PropTypes.object
}
export default AnecdoteList
