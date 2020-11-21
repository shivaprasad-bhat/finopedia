import React from 'react';
import { Col, Row, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarComponent = () => {
    return (
        <Row>
            <Col>
                <Navbar bg="primary" expand="lg" variant="light">
                    <Navbar.Brand href="/">Finoedia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>

                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/about">About Us</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    );
};

export default NavbarComponent;
