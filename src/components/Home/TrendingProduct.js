import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const SpecialOffers = () => {
  const [showAll, setShowAll] = useState(false);

  const offers = [
    { name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/istockphoto476199756612x612removebgpreview-1@2x.png', discount: '25% off' },
    { name: 'AAC Blocks', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/image202305241255152removebgpreview-1@2x.png', discount: '15% off' },
    { name: 'AAC Blocks', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/image202305241255152removebgpreview-1@2x.png', discount: '15% off' },
    { name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/istockphoto476199756612x612removebgpreview-1@2x.png', discount: '25% off' },
    { name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/istockphoto476199756612x612removebgpreview-1@2x.png', discount: '25% off' },
    { name: 'AAC Blocks', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/image202305241255152removebgpreview-1@2x.png', discount: '15% off' },
    { name: 'AAC Blocks', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/image202305241255152removebgpreview-1@2x.png', discount: '15% off' },
    { name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: 4.9, reviews: 374, imgSrc: '/istockphoto476199756612x612removebgpreview-1@2x.png', discount: '25% off' },
  ];

  const containerStyle = {
    padding: '20px',
    backgroundColor: 'lightgreen',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const cardStyle = {
    border: 'none',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  };

  const imageWrapperStyle = {
    width: '100%',
    height: '220px',
    position: 'relative',
    backgroundColor: '#e9ecef', // Light grey background color
    paddingTop: '100%', // Maintain a square aspect ratio
    overflow: 'hidden',
    borderRadius: '8px',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const discountStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff6f61',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const handleToggleCards = () => {
    setShowAll(!showAll);
  };

  return (
    <Container fluid style={containerStyle}>
      <div style={headingStyle}>
        <div>Today's Special Offer</div>
        <Button variant="link" style={{ color: '#000' }} onClick={handleToggleCards}>
          {showAll ? 'See Less' : 'See All'}
        </Button>
      </div>
      <Row className="g-4">
        {offers.slice(0, showAll ? offers.length : 4).map((offer, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Card style={cardStyle}>
              <div style={imageWrapperStyle}>
                <Card.Img variant="top" src={offer.imgSrc} style={imageStyle} />
                <div style={discountStyle}>{offer.discount}</div>
              </div>
              <Card.Body>
                <Card.Title>{offer.name}</Card.Title>
                <Card.Text>
                  <div><strong>Price:</strong> {offer.price}</div>
                  <div><strong>Original Price:</strong> {offer.originalPrice}</div>
                  <div><strong>Rating:</strong> {offer.rating} ({offer.reviews} Reviews)</div>
                </Card.Text>
                <Button variant="danger">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialOffers;
