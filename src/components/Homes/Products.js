import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Products({product,quantities,setQuantities}) {
  // const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product for the modal
  // const [quantities, setQuantities] = useState({}); // State for tracking quantities for each product
  const [showAll, setShowAll] = useState(false); // State for toggling between limited and all products
  const navigate=useNavigate();
  // Fetch products from API
  // useEffect(() => {
  //   axios
  //     .get("http://195.35.20.1:8000/accounts/fast-moving-products/")
  //     .then((response) => {
  //       if (response.data.Status === "1") {
  //         setProducts(response.data.Data);
  //         // Initialize quantities with 1 for each product
  //         const initialQuantities = {};
  //         response.data.Data.forEach((product) => {
  //           initialQuantities[product.id] = 1;
  //         });
  //         setQuantities(initialQuantities);
  //       } else {
  //         console.error("Failed to fetch products");
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  // Show modal for a particular product
  const handleShowModal = (product) => {
    setSelectedProduct(product); // Set clicked product as selected
    setShowModal(true); // Show modal
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setSelectedProduct(null); // Clear selected product
  };

  // Calculate the final price based on the product, quantity, and offer percent
  const calculateFinalPrice = (product) => {
    if (!product) return 0;
    const { price, delivery_charge, offer_percent } = product;

    // Calculate total price (product price + delivery charge)
    const totalPrice = price + delivery_charge;

    // Apply discount if offer_percent exists, otherwise no discount
    const discount = offer_percent ? (offer_percent / 100) * totalPrice : 0;

    // Final price after discount, multiplied by the quantity
    const finalPrice = (totalPrice - discount) * (quantities[product.id] || 1);
    return finalPrice.toFixed(2); // Returning final price rounded to two decimal places
  };

  // Toggle between showing limited products and all products
  const toggleShowAll = () => {
    setShowAll(!showAll); // Toggle the state
  };

  // Limit to 6 products initially
  const limitedProducts = showAll ? product : product.slice(0, 6);

  // Filter products to exclude out-of-stock items
  const availableProducts = limitedProducts.filter(product => product.stock > 0);
  const outOfStockProducts = limitedProducts.filter(product => product.stock === 0);

  // Function to handle quantity change for a specific product
  const handleQuantityChange = (product, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: Math.max(1, newQuantity), // Ensure quantity is at least 1
    }));
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)", // 6 cards per row
    gap: "20px",
  };

  const cardStyle = {
    position: "relative",
    border: "1px solid lightgray",
    borderRadius: "12px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    transition: "transform 0.2s ease-in-out",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    backgroundColor: "lightgray",
    borderRadius: "8px 8px 0 0",
    marginBottom: "10px",
  };

  const plusStyle = {
    position: "absolute",
    bottom: "15px",
    right: "15px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const outOfStockStyle = {
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "bold",
    color: "red",
    padding: "10px",
  };

  // Flex container style for heading and "See All" button
  const headingContainerStyle = {
    display: "flex",
    justifyContent: "space-between", // Align items at opposite ends
    alignItems: "center",
    marginBottom: "20px", // Add margin for spacing between the heading and product grid
  };

  // Function to handle adding the selected product to the cart
  const handleAddToCart = async () => {
    if (selectedProduct) {
      try {
        const token = localStorage.getItem('access_token'); // Get the token from local storage
        const response = await axios.post("http://195.35.20.1:8000/accounts/cart/", {
          product_id: selectedProduct.id,
          quantity: quantities,
        }, {
          headers: {
            Authorization: `Token ${token}`, // Set the token in the headers
          },
        });

        if (response.data.Status === "1") {
          console.log("Product added to cart:", selectedProduct, "Quantity:", quantities);
          navigate('/cart')
        } else {
          console.error("Failed to add to cart:", response.data.Message);
        }
      } catch (error) {
        console.error("Error adding to cart:", error);
      } finally {
        handleCloseModal();
      }
    }
  };

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      {/* Flex container for the heading and "See All" button */}
      <div style={headingContainerStyle}>
        <h2>Fast Moving Items</h2>
        <button onClick={toggleShowAll} style={{ cursor: "pointer" }}>
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      <div style={cardContainerStyle}>
        {/* Render available products */}
        {availableProducts.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img
              src={product.image ? `http://195.35.20.1:8000/${product.image}` : "https://via.placeholder.com/150"}
              alt={product.title}
              style={imageStyle}
            />
            <h3>{product.name}</h3>
            <p>Weight: {product.weight}</p>
            <p>Price: ₹{calculateFinalPrice(product)}</p>
            <div style={plusStyle} onClick={() => handleShowModal(product)}>
              +
            </div>
          </div>
        ))}
        {/* Render out-of-stock products with a message */}
        {outOfStockProducts.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img
              src={product.image ? `http://195.35.20.1:8000/${product.image}` : "https://via.placeholder.com/150"}
              alt={product.title}
              style={imageStyle}
            />
            <h3>{product.name}</h3>
            <p style={outOfStockStyle}>Out of Stock</p>
          </div>
        ))}
      </div>

      {/* Modal for product details */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProduct.image ? `http://195.35.20.1:8000${selectedProduct.image}` : "https://via.placeholder.com/150"}
              alt={selectedProduct.name}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <p><strong>Weight:</strong> {selectedProduct.weight}</p>
            <p><strong>Price (including delivery):</strong> ₹{calculateFinalPrice(selectedProduct)}</p>
            <div>
              <label>Quantity:</label>
              <input
                type="number"
                value={quantities[selectedProduct.id] || 1}
                onChange={(e) => handleQuantityChange(selectedProduct, parseInt(e.target.value))}
                min="1"
                style={{ width: "50px", marginLeft: "10px" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
