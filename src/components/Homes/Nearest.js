import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
export default function Nearest({products}) {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [showModal, setShowModal] = useState(false); 
  const [quantity, setQuantity] = useState(1); 
  const [showAll, setShowAll] = useState(false); 
  const navigate=useNavigate();
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("http://195.35.20.1:8000/accounts/getOfferProducts/");
  //       if (response.data.Status === "1") {
  //         setProducts(response.data.Data);
  //       } else {
  //         setError("Failed to fetch products");
  //       }
  //     } catch (err) {
  //       setError("Error fetching products");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const calculateFinalPrice = (price, offerPercent, deliveryCharge, quantity) => {
    const offerPrice = price * (offerPercent / 100);
    const discountedPrice = price - offerPrice;
    const totalPrice = discountedPrice + deliveryCharge;
    return totalPrice * quantity;
  };

  const handleAddToCart = async (product) => {
    setSelectedProduct(product); 
    setQuantity(1); 
    setShowModal(true); 
  };

  const handleCloseModal = () => setShowModal(false); 

  const toggleShowAll = () => setShowAll(!showAll); 

  const addToCart = async () => {
    if (selectedProduct) {
      try {
        const token = localStorage.getItem('access_token'); // Get the token from local storage
        const response = await axios.post("http://195.35.20.1:8000/accounts/cart/", {
          product_id: selectedProduct.id,
          quantity: quantity,
        }, {
          headers: {
            Authorization: `Token ${token}`, // Set the token in the headers
          },
        });

        if (response.data.Status === "1") {
          console.log("Product added to cart:", selectedProduct, "Quantity:", quantity);
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
    <div style={{ backgroundColor: "lightgreen", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Today's Special Offers</h2>
        <button
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={toggleShowAll}
        >
          {showAll ? "See Less" : "See All"}
        </button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {products.length === 0 && !loading && <p>No products found</p>} {/* No products found message */}

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px" }}>
        {products.slice(0, showAll ? products.length : 6).map((product) => {
          if (product.stock === 0) {
            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: "lightgrey",
                  width: "16%",
                  padding: "15px",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                <h4 style={{ color: "red", textAlign: "center" }}>Out of Stock</h4>
              </div>
            );
          }

          return (
            <div
              key={product.id}
              style={{
                backgroundColor: "lightgrey",
                width: "16%",
                padding: "15px",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <img
                src={product.product_images[0]?.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <h4 style={{ margin: "10px 0 5px 0", fontSize: "16px" }}>{product.name}</h4>
              <p style={{ fontSize: "14px", margin: "0 0 20px 0" }}>
                Price: ${calculateFinalPrice(product.price, product.offer_percent, product.delivery_charge, 1).toFixed(2)}
              </p>

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleAddToCart(product)} 
              >
                +
              </div>
            </div>
          );
        })}
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <h4>{selectedProduct.name}</h4>
              <img
                src={selectedProduct.product_images[0]?.image}
                alt={selectedProduct.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <p>Price: ${calculateFinalPrice(selectedProduct.price, selectedProduct.offer_percent, selectedProduct.delivery_charge, quantity).toFixed(2)}</p>
              <p>Description: {selectedProduct.description}</p>
              <p>Stock: {selectedProduct.stock}</p>

              <div style={{ marginTop: "10px" }}>
                <label htmlFor="quantity">Quantity:</label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max={selectedProduct.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))} 
                  style={{
                    width: "100%",
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginTop: "5px",
                  }}
                />
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={addToCart} // Call the add to cart function
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
