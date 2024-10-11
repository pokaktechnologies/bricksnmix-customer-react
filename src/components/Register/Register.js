import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate(); // Initialize navigate

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create request body
    const requestData = {
      username: username,
      email: email,
      password: password,
      confirm_password: confirmPassword // Include confirm_password
    };

    try {
      // API request to the backend
      const response = await fetch("http://195.35.20.1:8000/accounts/customer-signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData), // Send form data to backend
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful:", data);
        alert("Registration successful!");
        
        // Navigate to login after successful registration
        navigate("/login"); 
      } else {
        console.error("Registration failed:", data);
        alert("Registration failed: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Card
        style={{
          width: "28rem",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Body>
          <h3 className="text-center mb-4">Register</h3>
          <Form onSubmit={handleSubmit}>
            {/* Username Field */}
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Confirm Password Field */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Register
            </Button>
          </Form>

          {/* Social Signup Icons */}
          <div className="text-center mt-4">
            <p>Or sign up using:</p>
            <Row className="justify-content-center">
              <Col xs={3} className="text-center">
                <Button variant="outline-danger" style={{ width: "100%" }}>
                  <FaGoogle size={20} />
                </Button>
              </Col>
              <Col xs={3} className="text-center">
                <Button variant="outline-primary" style={{ width: "100%" }}>
                  <FaFacebook size={20} />
                </Button>
              </Col>
              <Col xs={3} className="text-center">
                <Button variant="outline-info" style={{ width: "100%" }}>
                  <FaTwitter size={20} />
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
