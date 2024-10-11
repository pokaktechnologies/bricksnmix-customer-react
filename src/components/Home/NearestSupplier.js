import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons

const NearestSuppliers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, suppliers.length - 1));
  };

  // Sample supplier data
  const suppliers = [
    { name: 'Company Name 1', imgSrc: '/ellipse-24@2x.png' },
    { name: 'Company Name 2', imgSrc: '/ellipse-24@2x.png' },
    { name: 'Company Name 3', imgSrc: '/ellipse-24@2x.png' },
    { name: 'Company Name 4', imgSrc: '/ellipse-24@2x.png' },
    { name: 'Company Name 5', imgSrc: '/ellipse-24@2x.png' },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    position: 'relative',
  };

  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign:'left'
  };

  const arrowContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const arrowStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    margin: '0 10px',
  };

  const supplierContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const supplierStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    gap:'10px'
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    marginBottom: '10px',
  };

  const nameStyle = {
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Nearest Suppliers</div>
      <div style={arrowContainerStyle}>
        <FaChevronLeft
          style={arrowStyle}
          onClick={handleLeftArrowClick}
        />
        <div style={supplierContainerStyle}>
          {suppliers.slice(currentIndex, currentIndex + 5).map((supplier, index) => (
            <div style={supplierStyle} key={index}>
              <img style={imageStyle} alt="" src={supplier.imgSrc} />
              <div style={nameStyle}>{supplier.name}</div>
            </div>
          ))}
        </div>
        <FaChevronRight
          style={arrowStyle}
          onClick={handleRightArrowClick}
        />
      </div>
    </div>
  );
};

export default NearestSuppliers;
