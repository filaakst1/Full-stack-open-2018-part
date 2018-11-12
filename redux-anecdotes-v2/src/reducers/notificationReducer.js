

const initialState=''


const notificationReducer = (store = initialState, action) => {
  console.log('NOTIFICATION ACTION: ', action)
  switch(action.type) {
  case 'CREATE_NOTIFICATION':
    return `Created '${action.data.content}'`
  case 'VOTE_NOTIFICATION':
    return `you voted '${action.content}'`
  case 'DELETE_NOTIFICATION':
    return ''
  default:
    return store
  }
}

export const createNotification = (data) => {

  return {
    type: 'CREATE_NOTIFICATION',
    data
  }
}
export const voteNotification = (content) => {

  return {
    type: 'VOTE_NOTIFICATION',
    content: content
  }
}
export const deleteNotification = () => {

  return {
    type: 'DELETE_NOTIFICATION',
  }
}
export default notificationReducer