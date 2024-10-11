import React from 'react';
import Header from "./Header";
import OrderSummary from "./CombinedComponent"; // Adjusted to match your updated filename
import Orderhistory from "./Orderhistory";
import Footer from "./Footer";
export default function Address() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const summaryStyle = {
    flex: '2',
    marginRight: '20px', // Space between summary and history
  };

  const historyStyle = {
    flex: '1',
    width: '300px', // Adjust width as needed
  };

  return (
    <div>
      <Header /><br/>
      <div style={containerStyle}>
        <div style={summaryStyle}>
          <OrderSummary />
        </div>
        <div style={historyStyle}>
          <Orderhistory />
        </div>
       
      </div><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}
