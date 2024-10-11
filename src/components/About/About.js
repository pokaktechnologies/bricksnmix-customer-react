import React from "react";
import Navbars from "./Navbar";
import { Container, Row, Col, Card, Form, Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function About() {
  // Inline styles
  const styles = {
    container: {
      backgroundColor: "green",
      padding: "30px",
      marginTop: "20px",
    },
    heading: {
      color: "white",
    },
    text: {
      color: "white",
    },
    imageContainer: {
      position: "relative",
      display: "inline-block",
      backgroundColor: "green",
    },
    iphoneImage: {
      width: "200px",
      position: "relative",
      backgroundColor: "green",
    },
    logoImage: {
      position: "absolute",
      width: "40%",
      top: "22%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    getToKnow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "50px",
      padding: "50px",
    },
    tool1: {
      marginRight: "30px",
    },
    tool1Image: {
      width: "300px",
      height: "300px",
      objectFit: "cover",
    },
    knowText: {
      maxWidth: "900px",
      textAlign: "left",
    },
    knowHeading: {
      fontSize: "50px",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    knowParagraph: {
      fontSize: "18px",
      marginTop: "10px",
    },
    clientReviews: {
      padding: "50px",
    },
    clientReviewsHeading: {
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "left",
    },
    reviewCards: {
      display: "flex",
      flexDirection: "row",
      gap: "20px",
    },
    card1: {
      padding: "100px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      borderColor: "green",
    },
    leadership: {
      textAlign: "center",
      padding: "50px",
    },
    leaders: {
      display: "flex",
      justifyContent: "space-around",
    },
    leaderImage: {
      height: "500px",
    },
    footer: {
      backgroundColor: "white",
      padding: "20px",
      marginTop: "30px",
      textAlign: "center",
    },
    footerLogo: {
      width: "100px",
    },
    footerLinksLeft: {
      textAlign: "left",
    },
    footerTextCenter: {
      textAlign: "center",
      marginTop: "10px",
    },
  };

  return (
    <div>
      <Navbars />
      <Container fluid style={styles.container}>
        <Row>
          <Col md={6}>
            <h2 style={styles.heading}>About us</h2>
            <p style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              suscipit ultricies orci.
            </p>
          </Col>

          <Col md={6} style={{ textAlign: "right", position: "relative" }}>
            <div style={styles.imageContainer}>
              <img
                src="/download.png"
                alt="iPhone 13"
                style={styles.iphoneImage}
              />
              <img
                src="/logo-1@2x.png"
                alt="Bricksmix Logo"
                style={styles.logoImage}
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Get to Know Section */}
      <section style={styles.getToKnow}>
        <div style={styles.tool1}>
          <img
            src="/Constructiontool.png"
            alt="Construction tools"
            style={styles.tool1Image}
          />
        </div>
        <div style={styles.knowText}>
          <h1>About Us</h1>
          <h2 style={styles.knowHeading}>Get to know about Bricksnmix</h2>
          <p style={styles.knowParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Client Review Section */}
      <section style={styles.clientReviews}>
        <h2 style={styles.clientReviewsHeading}>Our Client Review</h2>
        <div style={styles.reviewCards}>
          <div style={styles.card1}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          </div>
          <div style={styles.card1}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          </div>
          <div style={styles.card1}>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit..."</p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={styles.leadership}>
        <h2>Our Leadership</h2>
        <div style={styles.leaders}>
          <img src="./leader1.png" alt="Leader" style={styles.leaderImage} />
          <img src="./leader2.png" alt="Leader 2" style={styles.leaderImage} />
          <img src="./leader1.png" alt="Leader 3" style={styles.leaderImage} />
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <Container>
          <Row>
            <Col md={8} style={styles.footerLinksLeft}>
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

            <Col md={4} style={{ textAlign: "right" }}>
              <img
                src="/logo-1@2x.png"
                alt="Bricksmix Logo"
                style={styles.footerLogo}
              />
            </Col>
          </Row>

          <Row>
            <Col style={styles.footerTextCenter}>
              <p>&copy; 2024 Bricksnmix. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
