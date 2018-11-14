import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content) => {

  const response = await axios.post(baseUrl,{ content: content, votes:0 } )
  console.log('Create response'  + JSON.stringify(response))
  return response.data
}
const update = async (anecdote) => {
  // Filter to send only required fields
  const response = await axios.put(baseUrl+'/' + anecdote.id, {
    content: anecdote.content,
    votes: anecdote.votes
  })
  console.log('Update response'  + JSON.stringify(response))
  return response.data
}
export default { getAll, createNew,update }
