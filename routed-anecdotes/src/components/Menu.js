import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => {
  return(
    <div>
      <Navbar inverse  >
        <Navbar.Header>
          <Navbar.Brand>Software anecdotes</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav tabs='true' color='light' light='true'>
            <LinkContainer to='/' >
              <NavItem>anecdotes</NavItem>
            </LinkContainer>
            <LinkContainer to='/create' >
              <NavItem>create new</NavItem>
            </LinkContainer>
            <LinkContainer to='/about' >
              <NavItem>about</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menu