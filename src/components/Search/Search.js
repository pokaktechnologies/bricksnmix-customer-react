import React, { useMemo, useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

export default function Search() {
  const [showCementSand, setShowCementSand] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showBrand, setShowBrand] = useState(false);
  const [showQuantity, setShowQuantity] = useState(false);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Initialize minPrice and maxPrice with default values
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99.99);

  // Example product data
  const products = [
    { id: 1, name: 'Cement Bags (25 kg)', category: 'Cement', price: 2.5, oldPrice: 4.5, rating: 5, quantity: '25 KG' },
    { id: 2, name: 'Cement Bags (50 kg)', category: 'Cement', price: 3.0, oldPrice: 5.0, rating: 4, quantity: '50 KG' },
    { id: 3, name: 'Cement Bags (75 kg)', category: 'Cement', price: 4.0, oldPrice: 6.0, rating: 5, quantity: '75 KG' },
  ];

  useEffect(() => {
    // Filter products based on selected filters
    const filtered = products.filter(product => {
      return (
        (selectedFilters.includes('Cement') || selectedFilters.includes('Sand')) &&
        (selectedFilters.includes(product.quantity) || !selectedFilters.some(f => ['25 KG', '50 KG', '75 KG'].includes(f))) &&
        (selectedFilters.includes(product.category) || !selectedFilters.some(f => f === 'Cement')) &&
        (selectedFilters.includes(product.brand) || !selectedFilters.some(f => ['Brand A', 'Brand B'].includes(f))) &&
        (product.price >= minPrice && product.price <= maxPrice)
      );
    });
    setFilteredProducts(filtered);
  }, [selectedFilters, minPrice, maxPrice]);

  const toggleVisibility = (setter) => {
    setter((prevState) => !prevState);
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((item) => item !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const handleFilterRemove = (filter) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((item) => item !== filter));
  };

  const handlePriceRangeChange = (event) => {
    const [newMinPrice, newMaxPrice] = event.target.value.split(',').map(Number);
    // Ensure minPrice and maxPrice are set correctly
    if (!isNaN(newMinPrice) && !isNaN(newMaxPrice)) {
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
    }
  };

  const productCardStyle = useMemo(
    () => ({
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
      height: '320px',
      width:"80%",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }),
    []
  );

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '12px',
    backgroundColor: '#f9f9f9',
  };

  return (
    <div>
      <Header />
      <Container fluid style={{ padding: '20px 0' }}>
        <Row style={{ margin: '0', width: '100%' }}>
          {/* Filters */}
          <Col xs={2} style={{ padding: '0', paddingLeft: '16px' }}>
            <h5 style={{ textAlign: 'left' }}>Filter</h5>
            <Form>
              {/* Cement and Sand Filters */}
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Cement / Sand</span>
                <Button
                  variant="link"
                  style={{ padding: '0', marginLeft: 'auto' }}
                  onClick={() => toggleVisibility(setShowCementSand)}
                >
                  {showCementSand ? '-' : '+'}
                </Button>
              </div>
              {showCementSand && (
                <>
                  <Form.Check
                    type="checkbox"
                    id="cement-checkbox"
                    label="Cement"
                    checked={selectedFilters.includes('Cement')}
                    onChange={() => handleFilterChange('Cement')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="sand-checkbox"
                    label="Sand"
                    style={{ marginTop: '10px' }}
                    checked={selectedFilters.includes('Sand')}
                    onChange={() => handleFilterChange('Sand')}
                  />
                </>
              )}

              {/* Price Filters */}
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Price</span>
                <Button
                  variant="link"
                  style={{ padding: '0', marginLeft: 'auto' }}
                  onClick={() => toggleVisibility(setShowPrice)}
                >
                  {showPrice ? '-' : '+'}
                </Button>
              </div>
              {showPrice && (
                <>
                  <Form.Label>${minPrice.toFixed(2)}</Form.Label>
                  <Form.Range
                    min={0}
                    max={99.99}
                    step={0.01}
                    value={`${minPrice},${maxPrice}`}
                    onChange={handlePriceRangeChange}
                  />
                  <Form.Label>${maxPrice.toFixed(2)}</Form.Label>
                </>
              )}

              {/* Brand Filters */}
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Brand</span>
                <Button
                  variant="link"
                  style={{ padding: '0', marginLeft: 'auto' }}
                  onClick={() => toggleVisibility(setShowBrand)}
                >
                  {showBrand ? '-' : '+'}
                </Button>
              </div>
              {showBrand && (
                <>
                  <Form.Check
                    type="checkbox"
                    id="brand-a-checkbox"
                    label="Brand A"
                    checked={selectedFilters.includes('Brand A')}
                    onChange={() => handleFilterChange('Brand A')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="brand-b-checkbox"
                    label="Brand B"
                    style={{ marginTop: '10px' }}
                    checked={selectedFilters.includes('Brand B')}
                    onChange={() => handleFilterChange('Brand B')}
                  />
                </>
              )}

              {/* Quantity Filters */}
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Quantity</span>
                <Button
                  variant="link"
                  style={{ padding: '0', marginLeft: 'auto' }}
                  onClick={() => toggleVisibility(setShowQuantity)}
                >
                  {showQuantity ? '-' : '+'}
                </Button>
              </div>
              {showQuantity && (
                <>
                  <Form.Check
                    type="checkbox"
                    id="quantity-25kg"
                    label="25 KG"
                    checked={selectedFilters.includes('25 KG')}
                    onChange={() => handleFilterChange('25 KG')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="quantity-50kg"
                    label="50 KG"
                    style={{ marginTop: '10px' }}
                    checked={selectedFilters.includes('50 KG')}
                    onChange={() => handleFilterChange('50 KG')}
                  />
                  <Form.Check
                    type="checkbox"
                    id="quantity-75kg"
                    label="75 KG"
                    style={{ marginTop: '10px' }}
                    checked={selectedFilters.includes('75 KG')}
                    onChange={() => handleFilterChange('75 KG')}
                  />
                </>
              )}
            </Form>
          </Col>

          {/* Product Cards */}
          <Col xs={10} style={{ padding: '0' }}>
            {/* Row for "Results on Cement" and "Showed 1 - 3 of 3 products" */}
            <Row style={{ marginBottom: '20px' }}>
              <Col xs={6} style={{ textAlign: 'left' }}>
                <h5>Results on Cement</h5>
              </Col>
              <Col xs={6} style={{ textAlign: 'right' }}>
                <span>Showed 1 - 3 of 3 products</span>
              </Col>
            </Row>

            {/* Filter Tags */}
            <Row style={{ marginBottom: '20px', alignItems: 'center' }}>
              <Col xs={6} style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', backgroundColor: '#f9f9f9' }}>Sort by:</span>
                <Dropdown style={{ backgroundColor: '#f9f9f9' }}>
                  <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" size="sm">
                    Popularity
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ backgroundColor: '#f9f9f9' }}>
                    <Dropdown.Item href="#">Popularity</Dropdown.Item>
                    <Dropdown.Item href="#">Price: Low to High</Dropdown.Item>
                    <Dropdown.Item href="#">Price: High to Low</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {selectedFilters.map((filter) => (
                  <span
                    key={filter}
                    style={{
                      marginLeft: '10px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {filter}
                    <span
                      onClick={() => handleFilterRemove(filter)}
                      style={{
                        marginLeft: '8px',
                        cursor: 'pointer',
                        color: '#ff0000',
                      }}
                    >
                      ✖
                    </span>
                  </span>
                ))}
              </Col>
            </Row>

            {/* Products */}
            <Row style={{ margin: '0', height: '320px',width:"80%" }}>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Col xs={4} key={product.id} style={{ padding: '0 8px' }}>
                    <div style={productCardStyle}>
                      <img
                        src="/istockphoto476199756612x612removebgpreview-21@2x.png"
                        alt={product.name}
                        style={imageStyle}
                      />
                      <h6>{product.name}</h6>
                      <div>
                        <div> {'⭐'.repeat(product.rating)} ({product.rating * 74} Reviews)</div>
                        <div>
                          <strong>${product.price.toFixed(2)}</strong> <span style={{ textDecoration: 'line-through' }}>${product.oldPrice.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              ) : (
                <Col xs={12} style={{ textAlign: 'center' }}>
                  <h5>No products found</h5>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}
