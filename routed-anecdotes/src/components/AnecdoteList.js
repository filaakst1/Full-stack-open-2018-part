import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const AnecdoteList = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ListGroup>
        {anecdotes.map(anecdote => <NavLink key={anecdote.id} className='list-group-item' exact to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</NavLink>) }
      </ListGroup>
    </div>
  )
}
export default AnecdoteList