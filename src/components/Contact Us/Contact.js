import React from "react";
import { Container, Row, Col, Card, Form, Button, Nav } from "react-bootstrap";
import Navbars from "./Navbar"; // Assuming you have a Navbar component
import { NavLink } from "react-router-dom"; // Assuming you are using React Router for navigation

export default function Contact() {
  return (
    <div>
      {/* Navbar */}
      <Navbars />

      {/* Main Content Section */}
      <Container fluid
  style={{
    backgroundColor: "green",
    padding: "30px",
    
    marginTop: "20px",
  }}
>
  <Row>
    {/* Contact Us and Lorem text on the left side */}
    <Col md={6}>
      <h2 style={{ color: "white" }}>Contact Us</h2>
      <p style={{ color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        suscipit ultricies orci.
      </p>
    </Col>

    {/* Image with Bricksmix logo inside on the right side */}
    <Col md={6} style={{ textAlign: "right", position: "relative" }}>
      {/* iPhone image */}
      <div style={{ position: "relative", display: "inline-block",backgroundColor:"green" }}>
        <img
          src="/download.png" // Replace with your iPhone 13 front image URL
          alt="iPhone 13"
          style={{ width: "200px", position: "relative",backgroundColor:"green" }}
        />

        {/* Logo inside the iPhone */}
        <img
          src="/logo-1@2x.png" // Replace with your Bricksmix logo URL
          alt="Bricksmix Logo"
          style={{
            position: "absolute",
            width: "40%",  // Adjust the size to fit within the iPhone screen
            top: "22%",    // Adjust these values based on the screen of the iPhone
            left: "50%",
            transform: "translate(-50%, -50%)",
            
          }}
        />
      </div>
    </Col>
  </Row>
</Container>


      {/* Card with Form Inputs */}
      <Row className="justify-content-center" style={{ marginTop: "30px" }}>
        <Col md={8}>
          <Card
            style={{
              border: "2px solid #fff",
              borderRadius:"8px",
              padding: "20px",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Get in Touch with Us</h1>
            <Form>
              {/* First Row - Two Inputs */}
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Second Row - Two Inputs */}
              <Row>
                <Col>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Text Area */}
              <Form.Group controlId="formMessage" style={{ marginTop: "15px" }}>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your message here"
                />
              </Form.Group>

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "15px", width: "100%" }}
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <Container>
          <Row>
            {/* Footer Links on the Left Side */}
            <Col md={8} style={{ textAlign: "left" }}>
              <Nav>
                <Nav.Item>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/projects" className="nav-link">
                    Projects
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/services" className="nav-link">
                    Services
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/about" className="nav-link">
                    About Us
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={8} style={{ textAlign: "left" }}>
              <Nav>
                <Nav.Item>
                  <NavLink to="/home" className="nav-link">
                    Home |
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/projects" className="nav-link">
                    Projects |
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/services" className="nav-link">
                    Services |
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/about" className="nav-link">
                    About Us
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Col>

            {/* Bricksmix Logo on the Right Side */}
            <Col md={4} style={{ textAlign: "right" }}>
              <img
                src="/logo-1@2x.png" // Replace with your Bricksmix logo URL
                alt="Bricksmix Logo"
                style={{ width: "100px" }}
              />
            </Col>
            <Col md={4} style={{ textAlign: "right" }}>
              <img
                src="/logo-1@2x.png" // Replace with your Bricksmix logo URL
                alt="Bricksmix Logo"
                style={{ width: "100px" }}
              />
            </Col>
             <Col md={4} style={{ textAlign: "right" }}>
              <img
                src="visa.png" // Replace with your Bricksmix logo URL
                alt="Bricksmix Logo"
                style={{ width: "100px" }}
              />
           
              <img
                src="/rup.png" // Replace with your Bricksmix logo URL
                alt="Bricksmix Logo"
                style={{ width: "100px" }}
              />
            
              <img
                src="/mas.png" // Replace with your Bricksmix logo URL
                alt="Bricksmix Logo"
                style={{ width: "100px" }}
              />
            </Col>
            
          </Row>
    
          {/* Footer Copyright */}
          <Row>
            <Col style={{ textAlign: "center", marginTop: "10px" }}>
              <p>&copy; 2024 Bricksnmix. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
