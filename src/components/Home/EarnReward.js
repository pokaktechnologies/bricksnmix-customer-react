import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'react-bootstrap';

const EarnReward = ({ className = "" }) => {
  const containerStyle = {
    background: 'url(/rectangle-62@2x.png) no-repeat center center',
    backgroundSize: 'cover',
    position: 'relative',
    padding: '20px',
    borderRadius: '8px',
  };

  const iconStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
  };

  const textStyle = {
    color: '#ffffff',
    textAlign: 'left',
  };

  const buttonStyle = {
    marginTop: '20px',
    
  };

  return (
    <Container fluid className={`rectangle-parent89 ${className}`} style={containerStyle}>
      <Row className="justify-content-center">
        <Col xs="auto" style={iconStyle}>
          <img className="group-child254" alt="" src="/ellipse-23.svg" />
        </Col>
        <Col xs={12} style={textStyle}>
          <h4><b>Earn Rewards</b></h4>
          <p>Earn rewards points on every purchase</p>
          <p>and redeem it.</p>
          <Button variant="light" style={buttonStyle}>Learn more</Button>
        </Col>
      </Row>
    </Container>
  );
};

EarnReward.propTypes = {
  className: PropTypes.string,
};

export default EarnReward;
