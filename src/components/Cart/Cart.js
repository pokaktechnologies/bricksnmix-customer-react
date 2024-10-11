import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { FaTrash, FaEye } from "react-icons/fa";  // Removed FaEdit
import Navbars from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Cart() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [products, setProducts] = useState([]); // State to hold the fetched products

  // Fetch products when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          console.error("No access token found");
          return; // Exit if no token is found
        }
        const response = await axios.get("http://195.35.20.1:8000/accounts/cart/", {
          headers: {
            Authorization: `Token ${token}`,
          }
        });

        const cartItems = response.data.items;  // Access the 'items' array
        setProducts(cartItems);
      } catch (error) {
        console.error("Error fetching products:", error.response ? error.response.data : error.message);
      }
    };
  
    fetchProducts();
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle delete modal
  const handleShowDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  // Handle view modal
  const handleShowViewModal = (product) => {
    setSelectedProduct(product);
    setShowViewModal(true);
  };

  const handleCloseViewModal = () => setShowViewModal(false);

  // Delete Logic
  const handleDeleteProduct = async () => {
    try {
      await axios.delete(`http://195.35.20.1:8000/accounts/cart/${selectedProduct.product_id}/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('access_token')}`
        }
      });
      setProducts(products.filter((product) => product.product_id !== selectedProduct.product_id)); // Remove deleted product from state
      setShowDeleteModal(false); // Close modal after deletion logic
    } catch (error) {
      console.error("Error deleting product:", error.response ? error.response.data : error.message);
    }
  };

  // Checkout function
  const handleCheckout = () => {
    // You can pass cart data if needed
    navigate('/orders'); // Redirect to the orders page
  };

  return (
    <div>
      <Navbars />
      <h3 style={{ textAlign: "center" }}>My Cart</h3>

      {/* Search Bar */}
      <InputGroup className="mb-3" style={{ maxWidth: "400px", margin: "20px auto" }}>
        <FormControl
          placeholder="Search Products..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </InputGroup>

      {/* Product Cards */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {filteredProducts.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>Products Not Found in Cart</p>
        ) : (
          filteredProducts.map((product) => (
            <Card key={product.product_id} className="mb-3" style={{ width: '70%', height: "500px", borderRadius: '10px', padding: '10px' }}>
              <Row className="no-gutters" style={{ width: "100%" }}>
                {/* Product Image */}
                <Col xs={4}>
                  <img src={product.product_images} alt={product.product_name} style={{ width: "100%", borderRadius: '5px' }} />
                </Col>

                {/* Product Information and Action Icons */}
                <Col xs={8} style={{ padding: "10px" }}>
                  <Row style={{ height: '100%', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    {/* Product Information */}
                    <Col xs={8} style={{ display: "flex", flexDirection: "column" }}>
                      <h5 style={{ margin: 0 }}>{product.product_name}</h5>
                      <p style={{ margin: 0 }}>Price: {product.price_per_item}</p>
                      <p style={{ margin: 0 }}>Quantity: {product.quantity}</p>
                      <p style={{ margin: 0 }}>Delivery: {product.delivery_charge}</p>
                    </Col>

                    {/* Action Icons */}
                    <Col xs={4} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                      <FaEye size={20} style={{ cursor: "pointer", marginRight: "10px" }} onClick={() => handleShowViewModal(product)} />
                      <FaTrash size={20} style={{ cursor: "pointer", color: "red" }} onClick={() => handleShowDeleteModal(product)} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </div>

      {/* Checkout Button */}
      {filteredProducts.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button variant="primary" onClick={handleCheckout} style={{ width: "200px" }}>
            Checkout
          </Button>
        </div>
      )}

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{selectedProduct?.product_name}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteProduct}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* View Modal */}
      <Modal show={showViewModal} onHide={handleCloseViewModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedProduct?.product_name}</h5>
          <p>Price: {selectedProduct?.price_per_item}</p>
          <p>Quantity: {selectedProduct?.quantity}</p>
          <p>Delivery: {selectedProduct?.delivery_charge}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseViewModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
