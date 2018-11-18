import React from 'react'
import { NavLink } from 'react-router-dom'

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id}> <NavLink exact to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</NavLink></li>)}
    </ul>
  </div>
)
export default AnecdoteList