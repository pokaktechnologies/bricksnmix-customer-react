import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Orderhistory = () => {
  const containerStyle = {
    padding: '20px',
    borderRadius: '5px',
    width: '100%',
    backgroundColor: '#fff',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'left',
  };

  const detailStyle = {
    marginBottom: '10px',
    fontSize: '16px',
  };

  const priceStyle = {
    fontSize: '16px'
   
  };

  const confirmButtonStyle = {
    marginTop: '20px',
    textAlign: 'center',
    // backgroundColor:"orange",
    color:"white"
  };

  return (
    <Container style={containerStyle}>
      <div style={headingStyle}>Order Summary</div>
      <Card>
        <Card.Body>
          <Row>
            <Col md={4}>
              <img
                src="/istockphoto476199756612x612removebgpreview-4@2x.png"
                alt="Product"
                style={{ width: '100%', borderRadius: '5px',objectFit:"cover","backgroundColor":"lightgrey" }}
              />
            </Col>
            <Col md={8}>
              <div style={{ fontSize: '16px',fontWeight:"bold" }}>Cement Bags (25 kg)</div>
              <div style={{ fontSize: '16px' }}>Qty: 2</div>
            </Col>
          </Row><hr/>
          <div style={detailStyle}>
            <div style={priceStyle}>Original Price: $3.20</div>
            <div style={priceStyle}>Offer Price: $2.50</div>
            <div style={detailStyle}>Quantity: 2</div>
            <div style={detailStyle}>Delivery Charge: Free</div>
            <div style={detailStyle}>Expected Delivery: 23 June 2024</div><hr/>
            <div style={priceStyle}>SUB TOTAL: $5.00</div>
          </div>
          <div style={confirmButtonStyle}>
            <button style={{"color":"white","backgroundColor":"orange",width:"100%",borderRadius:"8px"}}>Confirm</button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Orderhistory;
