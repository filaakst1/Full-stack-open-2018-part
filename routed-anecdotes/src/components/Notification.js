import React from 'react'

const Notification = ({ notification }) => {
  const style =  {
    display: notification.length === 0 ? 'none' : '',
    color: 'green',
    borderStyle: 'solid',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    borderWidth: '2px'
  }
  return(
    <div style={style} >
      {notification}
    </div>
  )
}
export default Notification