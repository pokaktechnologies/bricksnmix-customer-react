import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");  // State for username
    const [password, setPassword] = useState("");  // State for password
    const [userData, setUserData] = useState(null);  // State for storing user data
    const [message, setMessage] = useState("");  // State for message display
    const navigate = useNavigate();

    const styles = {
        container: { height: '100vh', padding: 0, margin: 0 },
        leftSide: { display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#f8f9fa', padding: '100px' },
        rightSide: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '100px', flex: 1, backgroundColor: '#ffffff' },
        illustration: { maxWidth: '500%', height: 'auto', maxHeight: '400px' },
        header: { textAlign: 'center', marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' },
        inputContainer: { display: 'flex', alignItems: 'right', marginBottom: '20px', width: '600%', maxWidth: '400px' },
        input: { height: '40px', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', flex: 1, width: '180%', maxWidth: '700px' },
        terms: { fontSize: '14px', color: '#555', textAlign: 'center', marginTop: '20px' },
        continueBtn: { backgroundColor: '#28a745', color: 'white', padding: '15px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' },
        footer: { display: 'flex', justifyContent: 'space-between', padding: '20px', width: '100%', backgroundColor: '#f1f1f1', position: 'fixed', bottom: 0 },
        registerLink: { marginTop: '20px', textDecoration: 'underline', color: 'black', fontWeight: 'bold' }
    };

    // Function to handle login submission
    const handleLogin = async () => {
        try {
            const response = await fetch('http://195.35.20.1:8000/accounts/api/v2/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
    
            // Ensure the response is JSON
            const data = await response.json();
    
            console.log(data); // Log the entire data for debugging
    
            // Check if the status is "1" (string comparison)
            if (data.status === "1") {
                console.log('Login successful', data.Data);
    
                // Store access token in localStorage
                localStorage.setItem('access_token', data.Data.access);
    
                // Set user data to state
                setUserData(data.Data);
    
                // Set success message
                setMessage("Login successful!");
    
                // Navigate to another page, e.g., dashboard
                navigate('/home');  // Replace with the correct route
            } else {
                console.error('Login failed:', data);
                setMessage('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('An error occurred. Please try again.');
        }
    };
    

    return (
        <>
            <Container fluid style={styles.container}>
                <Row className="h-100">
                    {/* Left Side */}
                    <Col md={6} style={styles.leftSide}>
                        <img src="./illustration.png" alt="Illustration" style={styles.illustration} />
                    </Col>

                    {/* Right Side */}
                    <Col md={6} style={styles.rightSide}>
                        <h2 style={styles.header}>
                            Please Enter Your Credentials To <br /> LOGIN
                        </h2>

                        {/* Username Input */}
                        <Form.Group controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="Enter your username"
                                style={styles.input}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}  // Update username state
                            />
                        </Form.Group>

                        {/* Password Input */}
                        <Form.Group controlId="password">
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                style={styles.input}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}  // Update password state
                            />
                        </Form.Group>

                        <p style={styles.terms}>
                            By continuing, you agree to the{" "}
                            <a href="/terms" style={{ textDecoration: 'underline', color: 'black', fontWeight: 'bold' }}>Terms & Conditions</a>
                        </p>

                        {/* Display login message */}
                        {message && <p>{message}</p>}

                        <Button
                            style={styles.continueBtn}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#28a745'}
                            onClick={handleLogin}  // Call handleLogin on button click
                        >
                            Continue
                        </Button>

                        {/* Register Link */}
                        <Link to="/register" style={styles.registerLink}>Don't have an account? Register here</Link>
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer style={styles.footer}>
                <a href="/contact" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', fontWeight: 'bold' }}>
                    Contact Us
                </a>
                <a href="/terms" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', fontWeight: 'bold' }}>
                    Terms And Conditions
                </a>
                <a href="/privacy" style={{ fontSize: '14px', color: '#555', textDecoration: 'none', fontWeight: 'bold' }}>
                    Privacy Policy
                </a>
            </footer>
        </>
    );
};

export default Login;
