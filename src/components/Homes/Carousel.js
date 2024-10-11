import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Carousels() {
  return (
    <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
      <h2 style={{ textAlign: "left", marginBottom: "20px", paddingLeft: "15px" }}>
        Trending Bulk Deals
      </h2>
      <Row noGutters>
        {/* First card - No gap on the left side */}
        <Col md={6}>
          <Card style={{ borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <Card.Img
              variant="top"
              src="/Group 28.png"
              alt="Deal 1"
              style={{
                objectFit: "cover",
                height: "250px",
                borderRadius: "10px",
              }}
            />
          </Card>
        </Col>

        {/* Second card - No gap on the right side */}
        <Col md={6}>
          <Card style={{ borderRadius: "10px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <Card.Img
              variant="top"
              src="/Frame 11245.png"
              alt="Deal 2"
              style={{
                objectFit: "cover",
                height: "250px",
                borderRadius: "10px",
              }}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
