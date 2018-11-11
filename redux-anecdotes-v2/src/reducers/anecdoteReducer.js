
const getId = () => (100000*Math.random()).toFixed(0)

const anecdoteReducer = (store = [], action) => {
  console.log('ANECDOTE ACTION: ', action)
  switch(action.type) {
  case 'VOTE': {
    console.log(`Voting for ${action.id}`)
    const old = store.filter(a => a.id !==action.id)
    const voted = store.find(a => a.id === action.id)
    return [...old, { ...voted, votes: voted.votes+1 } ]
  }
  case 'CREATE' : {
    return [...store, { content: action.content, id: getId(), votes:0 }]
  }
  case 'INIT_ANECDOTES': {
    return action.data
  }
  default:
    return store
  }
}
export const anecdoteInitialization = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}
export const anecdoteCreation = (content) => {

  return {
    type: 'CREATE',
    content: content
  }
}
export const voteAnecdote = (id) => {

  return {
    type: 'VOTE',
    id: id
  }
}


export default anecdoteReducer