import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hirepack(){
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '300px', // Adjust as needed
        backgroundColor: '#f8f9fa', // Example background color
      };
    
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      };
    
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem',
        borderRadius: '8px',
      };
    
      const headingStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
      };
    
      const subheadingStyle = {
        fontSize: '1.2rem',
        marginBottom: '1rem',
      };
    
      const buttonStyle = {
        fontSize: '1rem',
        fontWeight: 'bold',
      };
    
      return (
        <Container fluid style={{ padding: 0 }}>
          <Row>
            <Col>
              <div style={containerStyle}>
                <img
                  src="/rectangle-64@2x.png"
                  alt="Background"
                  style={imageStyle}
                />
                <div style={overlayStyle}>
                  <div>
                    <p style={headingStyle}>Hire your</p>
                    <p style={subheadingStyle}>Pick-up.</p>
                  </div>
                  <Button style={buttonStyle} variant="primary">
                    Hire Now
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      );
}