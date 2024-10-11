import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TrendingBrands = ({trendingBrands}) => {
  // const [trendingBrands, setTrendingBrands] = useState([]);

  // // Fetch the trending brands from the API
  // const fetchTrendingBrands = async () => {
  //   try {
  //     const response = await axios.get('http://195.35.20.1:8000/accounts/getTrendingBrands/');
  //     setTrendingBrands(response.data.Data);
  //   } catch (error) {
  //     console.error('Error fetching trending brands:', error);
  //   }
  // };

  // // Use useEffect to trigger the API call on component mount
  // useEffect(() => {
  //   fetchTrendingBrands();
  // }, []);

  return (
    <Row>
         <h3 style={{"textAlign":"left"}}>Trending Brands</h3>
      {trendingBrands.length > 0 ? (
        trendingBrands.map((brand, index) => (
          <Col key={index} xs={3} sm={2} md={1} className="text-center mb-4">
            <div className="mb-2">
              <img
                src={brand.image || 'https://via.placeholder.com/80'}
                alt={brand.brandname}
                style={{ width: "80px", height: "80px", borderRadius: "50%" }}
              />
            </div>
            <p>{brand.brandname}</p>
          </Col>
        ))
      ) : (
        <p>Loading trending brands...</p>
      )}
    </Row>
  );
};

export default TrendingBrands;
