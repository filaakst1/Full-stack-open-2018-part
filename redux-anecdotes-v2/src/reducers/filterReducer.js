const initialState=''

const filterReducer = (store = initialState, action) => {
  console.log('FILTER ACTION: ', action)
  switch(action.type) {
  case 'UPDATE_FILTER_VALUE': {
    return action.filter
  }
  default:
    return store
  }
}
export const filterChange = (filter) => {
  return {
    type: 'UPDATE_FILTER_VALUE',
    filter: filter
  }
}
export default filterReducer