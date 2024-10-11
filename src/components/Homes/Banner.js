import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap"; // Removed Container to avoid unnecessary margins/padding

export default function Banner({banners}) {
  // const [banners, setBanners] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://195.35.20.1:8000/accounts/banners/")
  //     .then((response) => {
  //       if (response.data.Status === "1") {
  //         setBanners(response.data.Data);
  //       } else {
  //         console.error("Failed to fetch banners");
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching banners:", error));
  // }, []);

  const containerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    width: '100vw',  // Make the container span the full viewport width
    margin: '0',     // Remove any default margins
    overflowX: 'hidden',  // Prevent horizontal scroll
  };

  const colStyle = {
    marginBottom: '20px',
    padding: '0', // Remove padding to avoid extra space
  };

  const circleImageStyle = {
    width: '100px',  // Adjusted size for 12 items per row
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    backgroundColor: 'lightgray',
    margin: '0 auto', // Center image in each column
  };

  const bannerNameStyle = {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '12px',  // Reduced font size for better fit
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{"textAlign":"left"}}>Banners</h2>
      <Row style={{ marginLeft: '0', gap: '10px' }}> {/* Added gap for spacing */}
        {banners.map((banner, index) => (
          <Col key={banner.id} xs={6} sm={4} md={2} lg={1} style={colStyle}>
            <div>
              <img
                src={banner.image ? `http://195.35.20.1:8000${banner.image}` : "https://via.placeholder.com/100"}
                alt={banner.bannername}
                style={circleImageStyle}
              />
              <p style={bannerNameStyle}>{banner.bannername}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
