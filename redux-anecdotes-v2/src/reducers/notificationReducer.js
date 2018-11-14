

const initialState=''


const notificationReducer = (store = initialState, action) => {
  console.log('NOTIFICATION ACTION: ', action)
  switch(action.type) {
  case 'NOTIFY':
    return action.message
  default:
    return store
  }
}

export const notify = ( message, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: 'NOTIFY',
      message : message
    })
    setTimeout(() => {
      dispatch({
        type: 'NOTIFY',
        message : ''
      })
    }, timeout*1000)
  }
}
export default notificationReducer