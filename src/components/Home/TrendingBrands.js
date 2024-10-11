import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons

const TrendingBrands = () => {
  const brands = [
    { name: 'Brand Name', imgSrc: '/ellipse-24-5@2x.png' },
    { name: 'Brand Name', imgSrc: '/ellipse-24-5@2x.png' },
    { name: 'Brand Name', imgSrc: '/ellipse-24-5@2x.png' },
    { name: 'Brand Name', imgSrc: '/ellipse-24-5@2x.png' },
    { name: 'Brand Name', imgSrc: '/ellipse-24-5@2x.png' },
    
  ];

  const containerStyle = {
    padding: '10px',
    backgroundColor: '#f8f9fa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const cardStyle = {
    textAlign: 'center',
    margin: '10px',
  };

  const imageStyle = {
    width: '170px',
    height: '180px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  const arrowButtonStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    color: 'black', // Color of the arrow icons
    cursor: 'pointer',
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <div style={containerStyle}>
            <Button style={arrowButtonStyle}>
              <FaChevronLeft />
            </Button>
            <div style={{ flexGrow: 1, overflowX: 'auto' }}>
              <div style={headingStyle}>Trending Brands</div>
              <Row className="justify-content-start" style={{ marginTop: '20px' }}>
                {brands.map((brand, index) => (
                  <Col className="col-lg-2 g-2 m-2" key={index} style={cardStyle}>
                    <div>
                      <img src={brand.imgSrc} alt={brand.name} style={imageStyle} />
                      <div>{brand.name}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
            <Button style={arrowButtonStyle}>
              <FaChevronRight />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrendingBrands;
