import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../Components/Header.css'

const Header = () => {
  return (
    <Container fluid>
        <a href="/" className="text-dark" style={{textDecoration : "none"}}><h1 className="text-center mt-5" id='header-text'>Felix Choy</h1></a>
        <Navbar>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto d-flex flex-column flex-lg-row justify-content-lg-evenly align-items-center w-50 fs-5">
                <Nav.Link id="nav-link" href="/" className="mb-3 mb-lg-0">Home</Nav.Link>
                <Nav.Link id="nav-link" href="/about" className="mb-3 mb-lg-0">About</Nav.Link>
                <Nav.Link id="nav-link" href="/portfolio" className="mb-3 mb-lg-0">Portfolio</Nav.Link>
                <Nav.Link id="nav-link" href="/contact" className="mb-3 mb-lg-0">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Container>
  )
}

export default Header