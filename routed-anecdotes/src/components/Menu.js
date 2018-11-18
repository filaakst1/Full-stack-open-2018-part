import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const style = {
    backgroundColor: 'LightBlue',
    padding: '15px'
  }
  const activeStyle = {
    backgroundColor: 'white',
    paddingTop: '15px',
    paddingBottom: '15px'
  }
  return(
    <div style={style} >
      <NavLink exact to="/" activeStyle={activeStyle} >anecdotes</NavLink>&nbsp;
      <NavLink exact to="/create" activeStyle={activeStyle} >create new</NavLink>&nbsp;
      <NavLink exact to="/about" activeStyle={activeStyle} >about</NavLink>&nbsp;
    </div>
  )
}

export default Menu