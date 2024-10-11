import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = ({ className = "" }) => {
  const footerStyle = {
    backgroundColor: 'black',
    color: '#fff',
    padding: '2rem 0',
  };

  const sectionStyle = {
    marginBottom: '1rem',
  };

  const textStyle = {
    marginBottom: '0.5rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    marginRight: '10px',
  };

  return (
    <div className={`rectangle-parent86 ${className}`} style={footerStyle}>
      <Container>
        <Row style={sectionStyle}>
          <Col md={6}>
            <p style={textStyle}>
              bricksnmix transforming online shopping into experience and aim
            </p>
            <p style={textStyle}>
              to enrich your shopping list wisely. Wide range of products powered
            </p>
            <p style={textStyle}>
              by fast delivery and 24/7 customer service to enhance seamless
            </p>
            <p style={textStyle}>
              shopping.
            </p>
          </Col>
          <Col md={6}>
            <img
              alt=""
              src="/screenshot--95-removebgpreview-1@2x.png"
              style={iconStyle}
            />
            <img
              alt=""
              src="/screenshot--94-removebgpreview-1@2x.png"
              style={iconStyle}
            />
          </Col>
        </Row>
        <Row style={sectionStyle}>
          <Col>
            <p style={textStyle}>
              <a href="/about" style={linkStyle}>About bricksnmix.com</a> | 
              <a href="/warranty" style={linkStyle}> Warranty policy</a> | 
              <a href="/privacy" style={linkStyle}> Privacy policy</a> | 
              <a href="/terms" style={linkStyle}> Terms and Conditions</a> | 
              <a href="/contact" style={linkStyle}> Contact us</a>
            </p>
          </Col>
        </Row>
        <Row style={sectionStyle}>
          <Col md={6}>
            <p style={textStyle}>
              bricksnmix support team is hard working 24/7 for our customers. We give
            </p>
            <p style={textStyle}>
              high priority to troubleshoot and sort out all the complaints and issues of
            </p>
            <p style={textStyle}>
              our customers. We will provide entire support till your face smiles.
            </p>
          </Col>
          <Col md={6}>
            <Button variant="link" style={linkStyle}>
              Register as Seller
            </Button>
            <Button variant="link" style={linkStyle}>
              Login as Seller
            </Button>
          </Col>
        </Row>
        <Row style={sectionStyle}>
          <Col>
            <p style={textStyle}>Copyright 2024 bricksnmix.com. All rights reserved</p>
            <p style={textStyle}>24/7 Customer Support</p>
            <p style={textStyle}>Connect with us</p>
            <img
              alt=""
              src="/vector-3.svg"
              style={iconStyle}
            />
            <img
              alt=""
              src="/vector-4.svg"
              style={iconStyle}
            />
            <img
              alt=""
              src="/vector-5.svg"
              style={iconStyle}
            />
            <img
              alt=""
              src="/twitterroundedsvgrepocom.svg"
              style={iconStyle}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
