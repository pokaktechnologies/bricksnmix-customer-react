import React from "react";
import { useState } from "react";
import Navbars from "./Navbar";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
      firstName: "",
      email: "",
      phone: "",
      productReview: "",
      message: "",
      termsAccepted: false,
  });

  const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.termsAccepted) {
          console.log("Form Data Submitted:", formData);
      } else {
          alert("Please accept the terms.");
      }
  };

  return (
  <form
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns of equal width
      gridGap: "20px",
      maxWidth: "70%", // Increased the width
      margin: "0 auto", // Center the form horizontally
    }}
    onSubmit={handleSubmit}
  >
    <input
      type="text"
      name="firstName"
      placeholder="First Name"
      value={formData.firstName}
      onChange={handleChange}
      required
      style={{
        gridColumn: "span 2", // Span across both columns
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    />
    <input
      type="phone"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleChange}
      required
      style={{
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    />
    <input
      type="text"
      name="productReview"
      placeholder="Product review"
      value={formData.productReview}
      onChange={handleChange}
      style={{
        gridColumn: "span 2", // Span across both columns
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    />
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      style={{
        gridColumn: "span 2", // Span across both columns
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        marginBottom: "20px",
        height: "150px",
        resize: "none",
      }}
    ></textarea>
    <div
      style={{
        gridColumn: "span 2", // Span across both columns
        display: "flex",
        alignItems: "center",
        marginBottom: "20px", // Adjust spacing
      }}
    >
      <input
        type="checkbox"
        name="termsAccepted"
        checked={formData.termsAccepted}
        onChange={handleChange}
        style={{
          marginRight: "10px",
        }}
      />
      <label>I accept the Terms</label>
    </div>
    <button
      type="submit"
      style={{
        gridColumn: "span 2", // Span across both columns
        backgroundColor: "#00b400",
        color: "white",
        padding: "15px 40px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        textAlign: "center",
      }}
    >
      Submit
    </button>
  </form>
  );
};

export default function Services() {
  const services = [
    {
      title: "Construction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./Constructiontool.png",
    },
    {
      title: "Construction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./Constructiontool.png",
    },
    {
      title: "Construction",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "./Constructiontool.png",
    },
  ];

  return (
    <div>
      <Navbars />
      <Container fluid style={{
        backgroundColor: "green",
        padding: "30px",
        marginTop: "20px",
      }}>
        <Row>
          <Col md={6}>
            <h2 style={{ color: "white" }}>Services</h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit ultricies orci.
            </p>
          </Col>
          <Col md={6} style={{ textAlign: "right", position: "relative" }}>
            <div style={{
              position: "relative",
              display: "inline-block",
              backgroundColor: "green",
            }}>
              <img
                src="/download.png"
                alt="iPhone 13"
                style={{ width: "200px", position: "relative", backgroundColor: "green" }}
              />
              <img
                src="/logo-1@2x.png"
                alt="Bricksmix Logo"
                style={{
                  position: "absolute",
                  width: "40%",
                  top: "22%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={4} key={index}>
              <Card style={{
                flex: "1 1 calc(33.33% - 30px)",
                backgroundColor: "white",
                border: "1px solid #00b400",
                borderRadius: "5px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s ease",
                padding: "10px",
                margin: "40px",
              }}>
                <Card.Img variant="top" src={service.image} alt={service.title} />
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <section style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "40px",
        border: "2px solid #00b400",
        borderRadius: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
        gap: "50px",
      }}>
        <div style={{
          flex: "1",
          maxWidth: "40%",
        }}>
          <h1>Bricksnmix</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
            <img
              src="./Profile.png"
              alt="Reviewer"
              style={{ position: "absolute", top: "260px", left: "100px", width: "70px", height: "70px" }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
              <h4 style={{ margin: "0", paddingTop: "230px" }}>Lidiya</h4>
              <div>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: "14px", color: "#666", textAlign: "center", marginTop: "10px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

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
