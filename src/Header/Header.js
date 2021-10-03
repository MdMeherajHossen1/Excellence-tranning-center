import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Header.css'
const Header = () => {
    return (
        <div className="navbar-bg">
            <Navbar variant="light">
                <Container sticky="top" className="border border-success rounded">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#features">Details</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;