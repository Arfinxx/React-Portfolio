import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <NavDropdown title="About Me" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#About">About</NavDropdown.Item>
              <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <NavDropdown title="Social media" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Linkedin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">GitHub</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Email</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Download CV</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
