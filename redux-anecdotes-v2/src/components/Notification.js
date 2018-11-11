import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {

  render() {
    const { notification } = this.props
    const style = notification.length===0 ? { display: 'none' } : {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    notification: state.notification,
  }
}
export default connect(mapStateToProps)(Notification)
