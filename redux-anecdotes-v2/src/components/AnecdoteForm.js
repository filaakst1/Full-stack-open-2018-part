import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation }  from '../reducers/anecdoteReducer'
import { createNotification,deleteNotification } from '../reducers/notificationReducer'
class AnecdoteForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.anecdoteCreation(content)
    this.props.createNotification(content)

    setTimeout(() => {
      this.props.deleteNotification()
    }, 5000)

    e.target.anecdote.value = ''
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
