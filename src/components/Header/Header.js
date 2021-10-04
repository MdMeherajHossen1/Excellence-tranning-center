import React from 'react';

import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <div className="banner-bg">

            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Excellence Training Centre</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="selected"> Home </NavLink>
                            <NavLink to="/services" className="selected">Services </NavLink>
                            <NavLink to="/cart/:id" className="selected"> details </NavLink>
                            <NavLink to="/about" className="selected"> About </NavLink>


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="pt-5 heading w-50 mx-auto">
                <h1>Welcome to the Excellence Training Centre</h1>
                <p><small>We are offering you an international Standrad Quality Courses of Every faculty of Management</small></p>
                <button className="btn btn-success">About us</button>
            </div>

        </div>
    );
};

export default Header;