import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import Navbars from './Navbar'; // Assuming you have a Navbars component

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Fetch categories and subcategories from the API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await axios.get('http://195.35.20.1:8000/accounts/categories/');
                if (categoriesResponse.data.Status === "1") {
                    setCategories(categoriesResponse.data.Data);
                } else {
                    console.error("Failed to fetch categories");
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        const fetchSubcategories = async () => {
            try {
                const subResponse = await axios.get('http://195.35.20.1:8000/accounts/subcategories/');
                if (subResponse.data.status === "1") {
                    setSubcategories(subResponse.data.data); // Accessing 'data' inside subResponse
                } else {
                    console.error("Failed to fetch subcategories");
                }
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };

        fetchCategories();
        fetchSubcategories();
    }, []);

    // Filter categories based on search term
    const filteredCategories = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Styling for the square cards
    const cardStyle = {
        borderRadius: '10px',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        margin: '10px', // Space between cards
    };

    const cardImageStyle = {
        borderRadius: '10px 10px 0 0',
        backgroundColor: "lightgrey",
        height: '150px', // Reduced height for a better look
        objectFit: 'cover',
    };

    return (
        <>
            <Navbars />
            <Container fluid className="mt-5" style={{ backgroundColor: 'white', padding: 0 }}>
                {/* Search Bar */}
                <Row className="mb-3" style={{ marginLeft: 0, marginRight: 0 }}>
                    <Col md={12} className="d-flex justify-content-center">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Search Categories"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ width: '300px' }}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {/* Categories Section */}
                <h2 style={{"textAlign":"left"}}>Categories</h2>
                <Row className="no-gutters">
                    {filteredCategories.map(category => (
                        <Col xs={6} sm={4} md={3} lg={3} xl={3} className="mb-4" key={category.id}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={category.image} style={cardImageStyle} />
                                <Card.Body className="text-center p-2">
                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{category.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Subcategories Section */}
                <h2 style={{"textAlign":"left"}}>Subcategories</h2>
                <Row className="no-gutters">
                    {subcategories.map(subcategory => (
                        <Col xs={6} sm={4} md={3} lg={3} xl={3} className="mb-4" key={subcategory.id}>
                            <Card style={cardStyle}>
                                <Card.Img variant="top" src={subcategory.image} style={cardImageStyle} />
                                <Card.Body className="text-center p-2">
                                    <Card.Title style={{ fontSize: '16px', fontWeight: 'bold' }}>{subcategory.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
