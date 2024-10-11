import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CombinedComponent = ({ className = "", propFlex, propHeight }) => {
  const containerStyle = useMemo(() => ({
    flex: propFlex,
    height: propHeight,
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    position: 'relative'
  }), [propFlex, propHeight]);

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#ffffff',
    height: '400px', // Adjust height to maintain card square shape
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    width: '240px'
  };

  const imageStyle = {
    width: '100%',
    height: '150px', // Adjust height for the image
    objectFit: 'cover',
    borderRadius: '5px'
  };

  const textStyle = {
    fontSize: '16px',
    fontWeight: 'bold'
  };

  const priceContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the items horizontally
    marginBottom: '10px'
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px'
  };

  const oldPriceStyle = {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '16px'
  };

  const ratingStyle = {
    display: 'flex',
    alignItems: 'center', // Align items vertically
    marginBottom: '10px'
  };

  const reviewStyle = {
    marginLeft: '-5px',
    fontSize:'13px' // Add space between stars and review text
  };

  return (
    <Container fluid>
      <h1 style={{ textAlign: 'left' }}>Related Products</h1>
      <Row style={{ marginRight: '-110px', marginLeft: '-15px' }}>
        {[1, 2, 3, 4].map((index) => (
          <Col md={6} key={index} style={{ padding: '0 15px' }}>
            <div style={cardStyle} className={className}>
              <img
                src="/image202305241255152removebgpreview-1@2x.png"
                alt="Product"
                style={imageStyle}
              />
              <div style={ratingStyle}>
                <img src="/rating-star-one.svg" alt="Star" style={{ width: '20px', marginRight: '5px' }} />
                <img src="/rating-star-two.svg" alt="Star" style={{ width: '20px', marginRight: '5px' }} />
                <img src="/rating-star-one.svg" alt="Star" style={{ width: '20px', marginRight: '5px' }} />
                <img src="/rating-star-two.svg" alt="Star" style={{ width: '20px', marginRight: '5px' }} />
                <img src="/rating-star-one.svg" alt="Star" style={{ width: '20px', marginRight: '5px' }} />
                <div style={reviewStyle}>4.9(374 Reviews)</div>
              </div>
              <div style={textStyle}>AAC Blocks</div>
              <div style={priceContainerStyle}>
                <div style={priceStyle}>$2.50</div>
                <p style={oldPriceStyle}>$4.50</p>
              </div>
              <Button variant="success" style={{ width: '100%' }}>ADD TO CART</Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CombinedComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default CombinedComponent;
