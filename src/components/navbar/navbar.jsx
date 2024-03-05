import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import personal from '../../util/personal.json';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">AT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Projects">Projects</Nav.Link>
            <Nav.Link href="Skills">Skills</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Social media" id="collapsible-nav-dropdown">
              <NavDropdown.Item target='_blank' href={personal['linkedin-link']}>Linkedin</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href={personal['github-link']}>GitHub</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href={personal.email}>Email</NavDropdown.Item>
              <NavDropdown.Item target='_blank' href={personal.cv}>Download CV</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
