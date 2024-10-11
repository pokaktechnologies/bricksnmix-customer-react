import React from "react";
import Header from "./Header";
import ProductDetails from "./Productdetails";
import ProductReview from './ProductReview';
import CombinedComponent from "./Relatedproduct";
import { Container, Row, Col } from 'react-bootstrap';
import Footer from "./Footer";
export default function Products() {
  return (
    <>
      <Header />
      <ProductDetails />
      <Container>
        <Row>
          <Col md={8}>
            <ProductReview />
          </Col>
          <Col md={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CombinedComponent />
          </Col>
        </Row>
      </Container><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </>
  );
}
