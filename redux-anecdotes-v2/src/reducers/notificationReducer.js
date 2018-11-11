

const initialState='Notification initial state'


const notificationReducer = (store = initialState, action) => {
  console.log(`Notification reducer action: ${JSON.stringify(action)}`)
  switch(action.type) {
  case 'UPDATE_NOTIFICATION':
    return store
  default:
    return store
  }
}


export default notificationReducer