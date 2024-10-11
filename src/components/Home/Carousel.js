import React, { useState } from 'react';
import { Carousel as BootstrapCarousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };

  const carouselStyle = {
    position: 'relative',
    width: '100%',
    height: '280px'
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer'
  };

  const images = [
    '/hero-background@2x.png',
    '/hero-background@2x.png'
  ];

  return (
    <div style={carouselStyle}>
      <BootstrapCarousel activeIndex={currentIndex} onSelect={handleSelect} controls={false}>
        {images.map((image, index) => (
          <BootstrapCarousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ height: 'auto', maxHeight: '400px' }} // Adjust maxHeight as needed
            />
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
      <Button
        onClick={() => handleSelect((currentIndex - 1 + images.length) % images.length)}
        style={{ ...buttonStyle, left: '10px' }}
      >
        &lt;
      </Button>
      <Button
        onClick={() => handleSelect((currentIndex + 1) % images.length)}
        style={{ ...buttonStyle, right: '10px' }}
      >
        &gt;
      </Button>
    </div>
  );
}
