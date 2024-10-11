import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaCreditCard, FaBuilding, FaCcPaypal } from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';

const OrderSummary = () => {
  const [showAddresses, setShowAddresses] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleToggleAddresses = () => {
    setShowAddresses(!showAddresses);
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const handleEditAddress = () => {
    console.log(`Editing address: ${selectedAddress}`);
  };

  const handleTogglePaymentOptions = () => {
    setShowPaymentOptions(!showPaymentOptions);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
  };

  const containerStyle = {
    padding: '20px',
    borderRadius: '5px',
    margin: '0',
    width: '90%',
  };

  const sectionStyle = {
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '20px',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    display: 'flex',
    // backgroundColor:"lightgrey",
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };

  const toggleButtonStyle = {
    fontSize: '20px',
    cursor: 'pointer',
  };

  const addressContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start', // Align items to the left
  };

  const addressTextStyle = {
    fontSize: '16px',
    marginLeft: '10px', // Space between radio button and text
    marginBottom: '5px',
  };

  const paymentMethodStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const paymentMethodItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const iconStyle = {
    marginLeft: 'auto',
    marginRight: '10px',
  };

  const editButtonStyle = {
    marginTop: '10px',
    display: selectedAddress ? 'block' : 'none',
    position: 'absolute',
    right: '15px',
    bottom: '15px',
  };

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <div style={sectionStyle}>
            <div style={headingStyle}>
              <span>Confirm Order & Checkout</span>
            </div>
            <div style={sectionStyle}>
              {/* <div style={headingStyle}> */}
              <div style={{"backgroundColor":"lightgrey","padding":"10px", justifyContent: 'space-between',
    alignItems: 'flex-start',marginBottom: '10px',
    display: 'flex', fontWeight: 'bold',borderRadius:"8px"}}>
                <span>Select Delivery Address</span>
                <div onClick={handleToggleAddresses} style={toggleButtonStyle}>
                  {showAddresses ? '-' : '+'}
                </div>
              </div>
              {showAddresses && (
                <div>
                  <Form>
                    {['Adam Johns', 'Jane Doe', 'John Smith'].map((address, index) => (
                      <div key={index} style={{ marginBottom: '15px' }}>
                        <div style={addressContainerStyle}>
                          <Form.Check
                            type="radio"
                            id={`address-${index}`}
                            name="address"
                            value={address}
                            checked={selectedAddress === address}
                            onChange={() => handleSelectAddress(address)}
                            style={{ marginRight: '10px' }} // Space between radio button and text
                          />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <p style={addressTextStyle}>{address}</p>
                            <p style={addressTextStyle}>
                              House Name, Place, District, State, 682352, Country
                            </p>
                            {selectedAddress === address && (
                              <Button
                                variant="outline-secondary"
                                style={editButtonStyle}
                                onClick={handleEditAddress}
                              >
                                Edit Address
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Form>
                  <Button variant="outline-primary" style={{ marginTop: '10px' }}>
                    Add Address
                  </Button>
                </div>
              )}
            </div>
            <br />
            <div style={sectionStyle}>
              <div  style={{"backgroundColor":"lightgrey","padding":"10px", justifyContent: 'space-between',
    alignItems: 'flex-start',marginBottom: '10px',
    display: 'flex', fontWeight: 'bold',borderRadius:"8px"}}>
                <span>Payment Methods</span>
                <div onClick={handleTogglePaymentOptions} style={toggleButtonStyle}>
                  {showPaymentOptions ? '-' : '+'}
                </div>
              </div>
              {showPaymentOptions && (
                <div style={paymentMethodStyle}>
                  <div style={paymentMethodItemStyle}>
                    <Form.Check
                      type="radio"
                      id="payment-credit-card"
                      label="Credit Card"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'Credit Card'}
                      onChange={() => handleSelectPaymentMethod('Credit Card')}
                    />
                    <FaCreditCard size={30} style={iconStyle} />
                  </div>
                  <div style={paymentMethodItemStyle}>
                    <Form.Check
                      type="radio"
                      id="payment-debit-card"
                      label="Debit Card"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'Debit Card'}
                      onChange={() => handleSelectPaymentMethod('Debit Card')}
                    />
                    <IoMdCard size={30} style={iconStyle} />
                  </div>
                  <div style={paymentMethodItemStyle}>
                    <Form.Check
                      type="radio"
                      id="payment-bank-transfer"
                      label="Bank Transfer"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'Bank Transfer'}
                      onChange={() => handleSelectPaymentMethod('Bank Transfer')}
                    />
                    <FaBuilding size={30} style={iconStyle} />
                  </div>
                  <div style={paymentMethodItemStyle}>
                    <Form.Check
                      type="radio"
                      id="payment-upi"
                      label="UPI"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'UPI'}
                      onChange={() => handleSelectPaymentMethod('UPI')}
                    />
                    <FaCcPaypal size={30} style={iconStyle} />
                  </div>
                  <div style={paymentMethodItemStyle}>
                    <Form.Check
                      type="radio"
                      id="payment-cash-on-delivery"
                      label="Cash on Delivery"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === 'Cash on Delivery'}
                      onChange={() => handleSelectPaymentMethod('Cash on Delivery')}
                    />
                    <FaCcPaypal size={30} style={iconStyle} />
                  </div>
                </div>
              )}
            </div>
            <br />
            <Button variant="primary" style={{ width: '70%' }}>Confirm & Checkout</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSummary;
