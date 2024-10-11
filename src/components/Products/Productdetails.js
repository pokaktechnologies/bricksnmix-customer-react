import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Badge, Modal, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantityError, setQuantityError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://195.35.20.1:8000/accounts/getAllProducts/');
        if (response.data.Status === "1") {
          setProducts(response.data.Data);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Calculate total price based on selected quantity and product details
  const calculateTotalPrice = (product, quantity) => {
    const actualPrice = product.actual_price;
    const deliveryCharge = product.delivery_charge;
    const offerPercent = product.offer_percent;

    const totalPrice = (actualPrice + deliveryCharge) * (1 - offerPercent / 100) * quantity;
    return totalPrice.toFixed(2); // Return the price rounded to 2 decimals
  };

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity to 1 for modal
    setTotalPrice(calculateTotalPrice(product, 1)); // Calculate initial total price
    setShowModal(true);
    setQuantityError(''); // Reset error message
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // Ensure minimum quantity is 1
    }
    setQuantity(newQuantity);

    if (selectedProduct) {
      setTotalPrice(calculateTotalPrice(selectedProduct, newQuantity));
    }
  };

  const handleAddToCart = () => {
    if (quantity < selectedProduct.min_order_quantity) {
      setQuantityError(`Minimum order quantity is ${selectedProduct.min_order_quantity}`);
      return; // Prevent adding to cart if quantity is invalid
    }

    // Logic for adding to cart (navigate to cart)
    console.log(`Added to cart: ${selectedProduct.name}, Quantity: ${quantity}, Total Price: ${totalPrice} Rs`);
    navigate('/cart'); // Navigate to cart page (update the path according to your routes)
    handleCloseModal();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container fluid>
      <Row>
        {products.map((product) => (
          <Col key={product.id} xs={6} sm={4} md={3} lg={3} className="mb-4">
            <Card className="text-center" style={{ borderRadius: '10px' }}>
              {product.stock === 0 && (
                <Badge bg="danger" className="position-absolute" style={{ top: '10px', right: '10px' }}>
                  Out of Stock
                </Badge>
              )}
              <Card.Img variant="top" src={`http://195.35.20.1:8000${product.product_images[0].image}`} style={{ height: '200px', backgroundColor: 'lightgrey', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <strong>Description:</strong> {product.description} <br />
                  <strong>Total Price:</strong> {calculateTotalPrice(product, 1)} Rs <br />
                </Card.Text>
                {product.stock > 0 && (
                  <Button variant="primary" onClick={() => handleShowModal(product)}>Add to Cart</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for Quantity Selection */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center" style={{ backgroundColor: 'lightgrey', borderRadius: '10px' }}>
            <Card.Body>
              <Card.Title>{selectedProduct?.name}</Card.Title>
              <Card.Text>
                <strong>Description:</strong> {selectedProduct?.description} <br />
                <strong>Total Price:</strong> {totalPrice} Rs <br />
              </Card.Text>
              {quantityError && <Alert variant="danger">{quantityError}</Alert>}
              <Form.Group controlId={`quantity-${selectedProduct?.id}`} className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                />
              </Form.Group>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProductDetails;
