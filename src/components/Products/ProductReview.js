import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ProductReview = () => {
  const containerStyle = {
   
    justifyContent:"flex-start",
    borderRadius: '5px',
    
   
    margin:'0px'
  };
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  };

  const reviewStyle = {
    border: '1px solid #00796b', // Darker green border
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    width:'720px',
    fontSize:'16px',
    backgroundColor: '#f8f9fa', // White background for reviews
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Slight shadow for a lift effect
  };

  const starStyle = {
    width: '20px',
    marginRight: '5px'
  };

  return (
    <Container style={containerStyle}>
      <br/>
      <h1 style={{ textAlign: 'left' }}>Reviews</h1>
      <Row>
        <Col>
          
          <div style={{  textAlign: 'left' }}>
            
            <div style={{ marginBottom: '20px',width:"620px",backgroundColor:"pink",height:"60px",borderRadius: '5px', }}>
              <span style={{ fontWeight: 'bold' }}> 4.9 Rating (376 Reviews) <Button  style={{ backgroundColor:"white","color":"blue",marginRight:'0px',float:"right" }}>Write Review</Button></span>
              
            </div>
            <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>Sort by
            <Button style={{ marginRight: '10px',"color":"gray","backgroundColor":"white" }}>Most Recent</Button>
              <Button style={{ marginRight: '10px',"color":"gray","backgroundColor":"white" }}>Highest Rating</Button>
              <Button style={{"color":"gray","backgroundColor":"white"}}>Lowest Rating</Button>
              
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} style={reviewStyle}>
                 
                  <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>Adam Johns</div>
                  <div style={{ marginBottom: '10px',display:"flex" }}>
                    <img style={starStyle} src="/star-icons1.svg" alt="Star Icon" />
                    <img style={starStyle} src="/star-23.svg" alt="Star" />
                    <img style={starStyle} src="/star-24.svg" alt="Star" />
                    <img style={starStyle} src="/star-24.svg" alt="Star" />
                    <img style={starStyle} src="/star-24.svg" alt="Star" />
                    <div style={{ fontSize: '16px' }}>5.0</div>
                  </div>
                  <div>
                    <p style={{ margin: '0' }}>Lorem ipsum dolor sit amet consectetur. Imperdiet eget ullamcorpersed quis.Bibendum neque</p>
                    <p style={{ margin: '0' }}>tempor libero risusin id tellus duis. Gravidaelementum.</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={buttonContainerStyle}>
              <FontAwesomeIcon icon={faArrowDown} style={{ fontSize: '24px', color: '#00796b' }} />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductReview;
