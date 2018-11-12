import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation }  from '../reducers/anecdoteReducer'
import { createNotification,deleteNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'
class AnecdoteForm extends React.Component {

  handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    this.props.anecdoteCreation(newAnecdote)
    this.props.createNotification(newAnecdote)
    setTimeout(() => {
      this.props.deleteNotification()
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}
export default connect(null,{ anecdoteCreation,createNotification,deleteNotification })(AnecdoteForm)
