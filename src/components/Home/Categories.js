import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Categories = () => {
  const categories = [
    { name: 'Landscape', imgSrc: '/masonryremovebgpreview-1@2x.png' },
    { name: 'Masonry', imgSrc: '/concmix-1@2x.png' },
    { name: 'Concrete ready', imgSrc: '/plaster-1@2x.png' },
    { name: 'Plaster & Mortar', imgSrc: '/screenshot-20240531-001254removebgpreview-1@2x.png' },
    { name: 'Precast', imgSrc: '/screenshot-20240531-002213removebgpreview-1@2x.png' },
    { name: 'Drywall & Gypsum', imgSrc: '/ellipse-4.svg' },
    { name: 'Steel Scaffolding', imgSrc: '/ellipse-5@2x.png' },
    { name: 'Chemicals', imgSrc: '/metaltechkit10h5dsolidscrewjackswooddeck-1removebgpreview-1@2x.png' },
    { name: 'Cement / Sand', imgSrc: '/screenshot-20240531-004237removebgpreview-1@2x.png' },
    { name: 'White-wood', imgSrc: '/screenshot-20240531-004451removebgpreview-1@2x.png' },
  ];

  const containerStyle = {
    padding: '10px',
    backgroundColor: '#f8f9fa',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign:'left',
    marginBottom: '20px', // Spacing between heading and cards
  };

  const cardStyle = {
    marginBottom: '20px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover', // Ensures the image covers the card area
  };

  return (
    <Container fluid style={containerStyle}>
      <Row>
        <Col md={12}>
          <div style={headingStyle}>Categories</div>
        </Col>
      </Row>
      <Row className="g-4"> {/* g-4 for gap between cards */}
        {categories.map((category, index) => (
          <Col className="col-lg-2 g-2 m-4" key={index}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={category.imgSrc} style={imageStyle} />
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
