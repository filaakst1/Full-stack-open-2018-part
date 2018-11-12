

const initialState=''


const notificationReducer = (store = initialState, action) => {
  console.log('NOTIFICATION ACTION: ', action)
  switch(action.type) {
  case 'CREATE_NOTIFICATION':
    return `Created '${action.data.content}'`
  case 'VOTE_NOTIFICATION':
    return `you voted '${action.data.content}'`
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
export const voteNotification = (data) => {

  return {
    type: 'VOTE_NOTIFICATION',
    data
  }
}
export const deleteNotification = () => {

  return {
    type: 'DELETE_NOTIFICATION',
  }
}
export default notificationReducer