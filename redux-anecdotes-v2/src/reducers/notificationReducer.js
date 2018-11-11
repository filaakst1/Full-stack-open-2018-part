

const initialState=''


const notificationReducer = (store = initialState, action) => {
  console.log('NOTIFICATION ACTION: ', action)
  switch(action.type) {
  case 'CREATE_NOTIFICATION':
    return `Created '${action.content}'`
  case 'VOTE_NOTIFICATION':
    return `you voted '${action.content}'`
  case 'DELETE_NOTIFICATION':
    return ''
  default:
    return store
  }
}

export const createNotification = (content) => {

  return {
    type: 'CREATE_NOTIFICATION',
    content: content
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