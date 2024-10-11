import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const CategoryList = ({categories}) => {
  // const [categories, setCategories] = useState([]);

  // Fetch the category data from the API using Axios
  // useEffect(() => {
  //   axios.get('http://195.35.20.1:8000/accounts/categories/')
  //     .then(response => {
  //       const data = response.data;
  //       if (data.Status === "1") {
  //         setCategories(data.Data);
  //       }
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <Container fluid>
         <h3 style={{"textAlign":"left"}}>Categories</h3>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} xs={12} sm={6} md={4} lg={2} xl={1} className="text-center mb-4">
            <div className="category-item">
              {/* Circular Image */}
              <Image 
                src={category.image || 'https://via.placeholder.com/150'} 
                roundedCircle 
                width={100} 
                height={100} 
                alt={category.name} 
              />
              {/* Category Name */}
              <p>{category.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
