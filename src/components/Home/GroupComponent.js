
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GroupComponent = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    
    margin: '0', // Remove left and right margins to ensure no space
  };

  const rowStyle = {
    marginLeft: '0', // Remove left margin to align cards with the container
    marginRight: '0', // Remove right margin to align cards with the container
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    padding: '0',
    height: '300px',
    margin: '20px', // Space between cards
  };

  const imageStyle = {
    width: '100%', // Ensure the image covers the full width of the card
    height: '100%', // Ensure the image covers the full height of the card
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const contentStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '80%', // Ensure text fits within the content box
  };

  const shopNowStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: '1rem',
  };

  return (
    <Container style={containerStyle}>
    <h2 style={{"textAlign":"left"}}>Trending Bulk Deals</h2>
      <Row style={rowStyle} className="g-3">
        {[1, 2, 3].map((_, index) => (
          <Col key={index} className="d-flex col-md-4">
            <div style={cardStyle}>
              <img
                src="/pexelsdanielreche3721941-1@2x.png"
                alt={`Rectangle ${index + 1}`}
                style={imageStyle}
              />
              <div style={contentStyle}>
                <p>Metal Sheets<br />20 units starting<br />at Just $20</p>
                <div style={shopNowStyle}>SHOP NOW</div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GroupComponent;
