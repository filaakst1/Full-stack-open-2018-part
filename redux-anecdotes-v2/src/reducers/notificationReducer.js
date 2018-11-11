

const initialState='Notification initial state'


const notificationReducer = (store = initialState, action) => {
  console.log('NOTIFICATION ACTION: ', action)
  switch(action.type) {
  case 'CREATE_NOTIFICATION':
    return `Created '${action.content}'`
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
export const deleteNotification = () => {

  return {
    type: 'DELETE_NOTIFICATION',
  }
}
export default notificationReducer