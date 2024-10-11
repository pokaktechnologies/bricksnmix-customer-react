import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Carousel, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import Circle from "./Circle";
import Carousels from "./Carousel";
import Input from "./Input";
import Nearest from "./Nearest";
import Products from "./Products";
import Navbars from "./Navbar";
import axios from "axios";
import CategoryList from "./CategoryList";
import TrendingBrands from "./Trendingbrands";
import Banner from "./Banner";

export default function Homes() {
    const [categories, setCategories] = useState([]);
    const [cardData, setCardData] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);
    const [banners, setBanners] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [trendingBrands, setTrendingBrands] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // State for search term

    // Fetch fast-moving products
    useEffect(() => {
        axios
            .get("http://195.35.20.1:8000/accounts/fast-moving-products/")
            .then((response) => {
                if (response.data.Status === "1") {
                    setProduct(response.data.Data);

                    // Initialize quantities with 1 for each product
                    const initialQuantities = {};
                    response.data.Data.forEach((product) => {
                        initialQuantities[product.id] = 1;
                    });
                    setQuantities(initialQuantities);
                } else {
                    console.error("Failed to fetch products");
                }
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Fetch offer products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://195.35.20.1:8000/accounts/getOfferProducts/");
                if (response.data.Status === "1") {
                    setProducts(response.data.Data);
                } else {
                    console.log("Failed to fetch products");
                }
            } catch (err) {
                console.log("Error fetching products");
            }
        };

        fetchProducts();
    }, []);

    // Fetch trending products
    useEffect(() => {
        fetch("http://195.35.20.1:8000/accounts/trending-products/")
            .then((response) => response.json())
            .then((data) => {
                if (data.Status === "1") {
                    const transformedData = data.Data.map((product) => ({
                        id: product.id,
                        image: product.product_images.length > 0 ? product.product_images[0].image : '',
                        title: product.name,
                        price: product.price,
                        offerPrice: product.offer_percent
                            ? product.price * (1 - product.offer_percent / 100)
                            : null,
                        stock: product.stock,
                    }));
                    setCardData(transformedData);
                } else {
                    console.error("Failed to fetch products");
                }
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    // Fetch categories
    useEffect(() => {
        axios
            .get('http://195.35.20.1:8000/accounts/categories/')
            .then(response => {
                const data = response.data;
                if (data.Status === "1") {
                    setCategories(data.Data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Fetch banners
    useEffect(() => {
        axios
            .get("http://195.35.20.1:8000/accounts/banners/")
            .then((response) => {
                if (response.data.Status === "1") {
                    setBanners(response.data.Data);
                } else {
                    console.error("Failed to fetch banners");
                }
            })
            .catch((error) => console.error("Error fetching banners:", error));
    }, []);

    // Fetch trending brands
    const fetchTrendingBrands = async () => {
        try {
            const response = await axios.get('http://195.35.20.1:8000/accounts/getTrendingBrands/');
            setTrendingBrands(response.data.Data);
        } catch (error) {
            console.error('Error fetching trending brands:', error);
        }
    };

    useEffect(() => {
        fetchTrendingBrands();
    }, []);

    // Filter products based on search term
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Navigation Bar */}
            <Navbars />

            {/* Location and Cart Section */}
            <Container fluid className="mt-3" style={{ backgroundColor: "red" }}>
                <Row>
                    <Col md={3}>
                        <Form.Group as={Row} className="align-items-center">
                            <Col>
                                <Form.Select size="sm" aria-label="Select location">
                                    <option>Ajman, UAE</option>
                                    <option value="1">Dubai, UAE</option>
                                    <option value="2">Sharjah, UAE</option>
                                    <option value="3">Abu Dhabi, UAE</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        {/* Search Bar */}
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Search anything"
                                size="md"
                                value={searchTerm} // Bind search term
                                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                            />
                        </Form.Group>
                    </Col>

                    <Col md={2} className="text-right">
                        <NavLink to="/cart">
                            {/* Shopping Cart Icon */}
                            <FaShoppingCart size={24} />
                        </NavLink>
                    </Col>
                </Row>
            </Container>

            {/* Carousel Section */}
            <Container fluid className="mt-4">
                <Carousel indicators={true}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-background@2x.png" alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-background@2x.png" alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/hero-background@2x.png" alt="Third slide" />
                    </Carousel.Item>
                </Carousel>
            </Container>

            {/* Categories Section */}
            <CategoryList categories={categories} />
            <Banner banners={banners} />

            {/* Trending Brands Section */}
            <TrendingBrands trendingBrands={trendingBrands} />

            {/* Other sections */}
            <Circle cardData={cardData} />
            <Carousels />
            <Input />
            <Nearest products={filteredProducts} /> {/* Pass filtered products to Nearest */}
            <Products product={product} quantities={quantities} setQuantities={setQuantities} /> {/* Adjust as needed */}

            {/* Footer Section */}
            <footer className="text-light mt-5 pt-4 pb-4" style={{ backgroundColor: "lightgrey" }}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <h5>Company</h5>
                            <Nav.Link href="/about" className="text-light">About Us</Nav.Link>
                            <Nav.Link href="/contact" className="text-light">Contact Us</Nav.Link>
                            <Nav.Link href="/projects" className="text-light">Projects</Nav.Link>
                        </Col>
                        <Col md={4}>
                            <h5>Support</h5>
                            <Nav.Link href="/cart" className="text-light">My Cart</Nav.Link>
                            <Nav.Link href="/products" className="text-light">Products</Nav.Link>
                            <Nav.Link href="/services" className="text-light">Services</Nav.Link>
                        </Col>
                        <Col md={4}>
                            <h5>Follow Us</h5>
                            <Nav.Link href="https://facebook.com" className="text-light">Facebook</Nav.Link>
                            <Nav.Link href="https://instagram.com" className="text-light">Instagram</Nav.Link>
                            <Nav.Link href="https://twitter.com" className="text-light">Twitter</Nav.Link>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col className="text-center">
                            <p>&copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}