import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

export default function Navbars() {
  const linkStyle = {
    textDecoration: 'none',  // Remove underline
    margin: '0 15px',        // Add space between links
    color: 'black'           // Ensure the text is black (or choose another color)
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src="/logo-1@2x.png"  // Replace with your logo URL
            alt="Logo"
            style={{ height: '40px' }}  // Adjust logo height as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/home" style={linkStyle}>Home</NavLink>
            <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
            <NavLink to="/services" style={linkStyle}>Services</NavLink>
            <NavLink to="/about" style={linkStyle}>About Us</NavLink>
            <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
          </Nav>
          <Nav>
            <Nav.Link href="#signup">
              <Button variant="outline-primary">Signup</Button>
            </Nav.Link>
            <Nav.Link href="#login">
              <Button variant="primary">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
