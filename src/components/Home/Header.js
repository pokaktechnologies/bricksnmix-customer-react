
import React from 'react';

import { Navbar, Nav, Container, Form, FormControl,Dropdown, Button } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Import react-icons
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap CSS is imported

export default function Header() {
  // Inline style objects
  const navbarStyle = {
    backgroundColor: '#ffffff', // White background
    color: '#000000', // Black text color
  };

  const logoStyle = {
    height: '40px', // Adjust logo size
  };

  const cartIconStyle = {
    marginRight: '5px',
  };

  const searchBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    padding: '5px 10px',
  };

  const searchInputStyle = {
    border: 'none',
    outline: 'none',
    flex: '1',
  };

  const categoriesStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px', // Space between category items
  };

  return (
    <>
    <Navbar bg="success" variant="dark" expand="lg" className="py-1" style={{ height: "60px", backgroundColor: "#28a745" }}>
        <Navbar.Brand href="#home" className="d-flex align-items-center" style={{ fontSize: "0.9rem" }}>
          <i className="bi bi-telephone" style={{ fontSize: "1rem" }}></i> +91-986546852
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ fontSize: "0.9rem" }}>
                Select Location
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#action/3.1" style={{ fontSize: "0.9rem" }}>Location 1</Dropdown.Item>
                <Dropdown.Item href="#action/3.2" style={{ fontSize: "0.9rem" }}>Location 2</Dropdown.Item>
                <Dropdown.Item href="#action/3.3" style={{ fontSize: "0.9rem" }}>Location 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form inline className="ml-auto">
            <p className="mr-2" style={{ fontSize: "0.9rem" }}>Login/Signup</p>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Navbar style={navbarStyle} variant="light" expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              className="logo-icon"
              loading="lazy"
              alt="Logo"
              src="/logo-1@2x.png"
              style={logoStyle}
            />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div style={searchBoxStyle}>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  className="mr-sm-2"
                  style={searchInputStyle}
                />
                <Button variant="light" style={{ border: 'none', background: 'none' }}>
                  <img className="icon10" alt="Search Icon" src="/vector-2.svg" />
                </Button>
              </div>
            </Nav>

            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link href="#account" style={{ color: '#000000' }}>
                <FaUser style={cartIconStyle} />
                Account
              </Nav.Link>
              <Nav.Link href="#cart" style={{ color: '#000000' }}>
                <FaShoppingCart style={cartIconStyle} />
                Cart
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar bg="light" variant="light" expand="lg" className="py-2">
        <Container>
          <Nav className="w-100 d-flex align-items-center" style={categoriesStyle}>
            <Nav.Link href="#all">All</Nav.Link>
            <Nav.Link href="#masonry">Masonry</Nav.Link>
            <Nav.Link href="#concrete">Concrete Ready</Nav.Link>
            <Nav.Link href="#plaster">Plaster & Mortar</Nav.Link>
            <Nav.Link href="#precast">Precast</Nav.Link>
            <Nav.Link href="#drywall">Drywall & Gypsum</Nav.Link>
            <Nav.Link href="#landscape">Landscape</Nav.Link>
            <Nav.Link href="#scaffolding">Steel Scaffolding</Nav.Link>
            <Nav.Link href="#chemicals">Chemicals</Nav.Link>
            <Nav.Link href="#cement-sand">Cement / Sand</Nav.Link>
            <Nav.Link href="#white-wood">White-Wood</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
