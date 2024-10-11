import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const LandscapeProducts = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '100%',

    margin: '0 auto',
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  const textContainerStyle = {
    position: 'absolute',
   
    left: '10px',
    top:'60px',
    color: '#fff',
    zIndex: 2,
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const discountStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  return (
    <Container style={containerStyle}>
      <div style={{ position: 'relative' }}>
        <img src="/rectangle-59@2x.png" alt="Landscape Products" style={imageStyle} />
        <div style={overlayStyle} />
        <div style={textContainerStyle}>
          <div style={titleStyle}>Landscape Products</div>
          <div style={discountStyle}>30% off on</div>
        </div>
      </div>
    </Container>
  );
};

export default LandscapeProducts;
