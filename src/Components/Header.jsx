import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" nav-links   me-auto">
  <Nav.Link> <NavLink  className="links" to="/">home</NavLink></Nav.Link>
    <Nav.Link>  <NavLink className="links"   to="/About"> about </NavLink></Nav.Link> 
     <Nav.Link > <NavLink className="links"  to="/Contact"> contact </NavLink></Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header
