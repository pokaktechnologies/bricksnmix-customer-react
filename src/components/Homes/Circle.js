import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function Circle({cardData}) {
  // const [cardData, setCardData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(6); // Initially show 6 products

  // useEffect(() => {
  //   fetch("http://195.35.20.1:8000/accounts/trending-products/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.Status === "1") {
  //         const transformedData = data.Data.map((product) => ({
  //           id: product.id,
  //           image: product.product_images.length > 0 ? product.product_images[0].image : '',
  //           title: product.name,
  //           price: product.price,
  //           offerPrice: product.offer_percent ? product.price * (1 - product.offer_percent / 100) : null,
  //           stock: product.stock,
  //         }));
  //         setCardData(transformedData);
  //       } else {
  //         console.error("Failed to fetch products");
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching products:", error));
  // }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    const initialPrice = product.offerPrice || product.price;
    setTotalPrice(initialPrice);
    setShowModal(true);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
    const pricePerItem = selectedProduct.offerPrice || selectedProduct.price;
    setTotalPrice(pricePerItem * newQuantity);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSeeAll = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6); // Show 6 more products
  };

  const containerStyle = {
    backgroundColor: 'lightgreen',
    padding: '20px',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'left',
  };

  const buttonStyle = {
    fontSize: '16px',
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)', // 6 cards per row
    gap: '20px',
  };

  const cardStyle = {
    position: 'relative',
    border: '1px solid lightgray',
    borderRadius: '12px',
    padding: '15px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    transition: 'transform 0.2s ease-in-out',
  };

  const imageStyle = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    backgroundColor: 'lightgray',
    borderRadius: '8px 8px 0 0',
    marginBottom: '10px',
  };

  const plusStyle = {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
    backgroundColor: 'red',
    color: '#fff',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const priceStyle = {
    fontSize: '16px',
  };

  const originalPriceStyle = {
    textDecoration: 'line-through',
    color: 'red',
    marginRight: '10px',
  };

  const offerPriceStyle = {
    color: 'green',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={headingStyle}>Trending Products</h2>
        {visibleProducts < cardData.length && (
          <span style={buttonStyle} onClick={handleSeeAll}>
            See All
          </span>
        )}
      </div>
      <div style={cardContainerStyle}>
        {cardData.length === 0 ? (
          <p>No products available</p>
        ) : (
          cardData.slice(0, visibleProducts).map((card) =>
            card.stock === 0 ? null : (
              <div key={card.id} style={cardStyle}>
                <img src={card.image} alt={card.title} style={imageStyle} />
                <h3>{card.title}</h3>
                <p style={priceStyle}>
                  {card.offerPrice ? (
                    <>
                      <span style={originalPriceStyle}>${card.price.toFixed(2)}</span>
                      <span style={offerPriceStyle}>${card.offerPrice.toFixed(2)}</span>
                    </>
                  ) : (
                    <span>${card.price.toFixed(2)}</span>
                  )}
                </p>
                {card.stock > 0 ? (
                  <div style={plusStyle} onClick={() => handleOpenModal(card)}>+</div>
                ) : (
                  <p style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</p>
                )}
              </div>
            )
          )
        )}
      </div>

      {/* Modal for Quantity and Price */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={selectedProduct?.image} alt={selectedProduct?.title} style={{ width: '100%' }} />
            <h3>
              Price:{" "}
              {selectedProduct?.offerPrice ? (
                <>
                  <span style={originalPriceStyle}>${selectedProduct.price.toFixed(2)}</span>
                  <span style={offerPriceStyle}>${selectedProduct.offerPrice.toFixed(2)}</span>
                </>
              ) : (
                `$${selectedProduct?.price.toFixed(2)}`
              )}
            </h3>
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              style={{ width: '50px', marginLeft: '10px' }}
            />
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary">
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
