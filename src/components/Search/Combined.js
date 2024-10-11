import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const CombinedComponent = ({ className = "" }) => {
  const [showFilters, setShowFilters] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const productCardStyle = useMemo(() => ({
    flex: '1 0 calc(33.333% - 16px)',
    minWidth: '250px',
    alignSelf: 'stretch',
    margin: '8px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }), []);

  return (
    <Container fluid style={{ padding: '0', margin: '0', height: '100vh' }}>
      <Row noGutters>
        <Col xs={3} style={{ padding: '20px', borderRight: '1px solid #ddd' }}>
          <div className={`frame-wrapper6 ${className}`}>
            <div className="frame-parent8">
              <div className="home-cement-sand-cements-parent">
                {/* <div className="home-cement1">{`Home > Cement / Sand > Cements `}</div> */}
                <div className="search-query">
                  <div className="results-on-cement">Results on “Cement”</div>
                </div>
              </div>
              <Button onClick={handleToggleFilters} style={{ marginBottom: '20px' }}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              {showFilters && (
                <div className="checkbox-filters">
                  <div className="filter">Filter</div>
                  <div className="applied-filters">
                    <div className="filter-values">
                      <div className="cement-sand7">{`Cement / Sand        `}</div>
                      <div className="applied-filter-names">-</div>
                    </div>
                  </div>
                  <Form>
                    <Form.Check type="checkbox" id="filter-cement" label="Cement" />
                    <Form.Check type="checkbox" id="filter-sand" label="Sand" />
                  </Form>
                  <div className="price-filter">
                    <div className="price-slider">
                      <div className="price-label">
                        <div className="price">{`Price                            `}</div>
                        <div className="price-range">-</div>
                      </div>
                    </div>
                    <div className="rating-filter">
                      <div className="rating-stars1">
                        <div className="star-icons1">
                          <div className="empty-stars" />
                          <div className="empty-stars1" />
                        </div>
                      </div>
                      <div className="rating-count">
                        <div className="rating-placeholders">
                          <div className="rating-placeholders-child" />
                          <div className="empty-rating-counts">$ 0.00</div>
                        </div>
                        <div className="rating-placeholders1">
                          <div className="rating-placeholders-item" />
                          <div className="div40">$ 99.99</div>
                        </div>
                      </div>
                    </div>
                    <div className="brand-filter">
                      <div className="brand">{`Brand                        `}</div>
                      <div className="brand-label">+</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col xs={9} style={{ padding: '20px' }}>
          <div className="product-grid">
            <Row noGutters>
              {[1, 2, 3].map((product, index) => (
                <Col key={index} xs={12} md={4}>
                  <div className="product-card" style={productCardStyle} onClick={() => handleSelectProduct(`Product ${product}`)}>
                    <div className="cement-bags-2519">Cement Bags (25 kg)</div>
                    <div className="product-rating">
                      <div className="rating-stars">
                        <div className="star-icons">
                          <img className="filled-stars-icon" alt="" src="/star-711.svg" />
                          <img className="filled-stars-icon1" alt="" src="/star-81.svg" />
                          <img className="filled-stars-icon2" alt="" src="/star-911.svg" />
                          <img className="filled-stars-icon3" alt="" src="/star-101.svg" />
                          <div className="empty-star">
                            <img className="star-placeholder-icon" alt="" src="/star-111.svg" />
                          </div>
                        </div>
                        <div className="review-count">
                          <div className="reviews27">4.9 (374 Reviews)</div>
                        </div>
                      </div>
                      <div className="price-container">
                        <b className="price-placeholder">$ 2.50</b>
                        <div className="old-price">
                          <div className="old-price-placeholder">
                            <div className="old-price-value">$ 4.50</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="product-count" style={{ marginTop: '20px' }}>
            <div className="showed-1-">Showed 1 - 3 of 3 products</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

CombinedComponent.propTypes = {
  className: PropTypes.string,
};

export default CombinedComponent;
