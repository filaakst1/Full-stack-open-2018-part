import anecdoteService from '../services/anecdotes'


const anecdoteReducer = (store = [], action) => {
  console.log('ANECDOTE ACTION: ', action)
  switch(action.type) {
  case 'VOTE': {
    const old = store.filter(a => a.id !==action.data.id)
    return [...old, action.data ]
  }
  case 'CREATE' : {
    return [...store, action.data ]
  }
  case 'INIT_ANECDOTES': {
    return action.data
  }
  default:
    return store
  }
}

export const anecdoteInitialization = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data : anecdotes
    })
  }
}
export const anecdoteCreation = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

export const voteAnecdote = (data) => {
  return async (dispatch) => {
    const changedAnecdote  = {
      id: data.id,
      content: data.content,
      votes: data.votes +1,
    }
    const updated = await anecdoteService.update(changedAnecdote)
    dispatch(
      {
        type: 'VOTE',
        data: updated
      })
  }
}


export default anecdoteReducer