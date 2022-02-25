import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" nav-links   me-auto">
              <Nav.Link> <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? "lightblue" : null, color: "grey" } }} className="links" to="/">home</NavLink></Nav.Link>
              <Nav.Link>  <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? "lightblue" : null, color: "grey" } }} className="links" to="/About"> about </NavLink></Nav.Link>
              <Nav.Link > <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? "lightblue" : null, color: "grey" } }} className="links" to="/Contact"> contact </NavLink></Nav.Link>
              <Nav.Link > <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? "lightblue" : null, color: "grey" } }} className="links" to="/User"> User </NavLink></Nav.Link>
              <Nav.Link > <NavLink style={({ isActive }) => { return { backgroundColor: isActive ? "lightblue" : null, color: "grey" } }} className="links" to="/stopwatch"> Stopwatch </NavLink></Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>


      </Navbar>
      <Outlet />
    </div>
  )
}

export default Header
