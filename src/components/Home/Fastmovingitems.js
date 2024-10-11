import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: '4.9 (374 Reviews)', imgSrc: '/istockphoto476199756612x612removebgpreview-3@2x.png' },
  { id: 2, name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: '4.9 (374 Reviews)', imgSrc: '/istockphoto476199756612x612removebgpreview-3@2x.png' },
  { id: 3, name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: '4.9 (374 Reviews)', imgSrc: '/istockphoto476199756612x612removebgpreview-3@2x.png' },
  { id: 4, name: 'Cement Bags (25 kg)', price: '$2.50', originalPrice: '$4.50', rating: '4.9 (374 Reviews)', imgSrc: '/istockphoto476199756612x612removebgpreview-3@2x.png' },
  { id: 5, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  { id: 6, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  { id: 7, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  { id: 8, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  { id: 9, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  { id: 10, name: 'AAC Blocks', price: '$3.50', originalPrice: '$5.50', rating: '4.98 (174 Reviews)', imgSrc: '/image202305241255152removebgpreview-2@2x.png' },
  // Add more products as needed
];

const Fastmoving = () => {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Row className="mb-4" style={{"textAlign":"left"}}>
        <Col>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Fast moving Items</h2>
        </Col>
        <Col className="text-right" style={{"textAlign":"right"}}>
          <Button variant="link" style={{ fontSize: '1rem', color: '#007bff' }}>See all</Button>
        </Col>
      </Row>
      <Row style={{ marginLeft: '0', marginRight: '0', gap: '1.5rem' }}>
        {products.map((product) => (
          <Col className="col-md-2 g-2 m-2" key={product.id} style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Card style={{ border: 'none', position: 'relative', borderRadius: '8px', padding: 0 }}>
              <div style={{ position: 'relative', backgroundColor: '#f8f9fa', width: '100%', paddingTop: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={product.imgSrc}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'red', backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50%', padding: '5px' }}>
                  <FaHeart size={24} />
                </div>
              </div>
              <Card.Body style={{ padding: '1rem' }}>
                <Card.Title style={{ fontSize: '1rem', fontWeight: 'bold' }}>{product.name}</Card.Title>
                <Card.Text style={{ margin: '0.5rem 0' }}>
                  <strong style={{ color: '#28a745' }}>{product.price}</strong> <del style={{ color: '#6c757d' }}>{product.originalPrice}</del>
                </Card.Text>
                <Card.Text style={{ color: '#6c757d' }}>{product.rating}</Card.Text>
                <Button variant="danger" style={{ width: '100%' }}>ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Fastmoving;
