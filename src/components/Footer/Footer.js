import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-bg">
            <h3 className="pt-5">ExcellenceTrainingCentre.com</h3>
            <div>
                <NavLink to="/home" className="selected"> Home </NavLink>
                <NavLink to="/services" className="selected">Services </NavLink>
                <NavLink to="/cart/:id" className="selected"> Cart </NavLink>
                <NavLink to="/about" className="selected"> About </NavLink>
            </div>
            <div className="py-2">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
            </div>
            <p><small>Copyright&copy;2021.All rights reserved| Made with <i class="fas fa-heart"></i> By Meheraj Muhammad</small></p>
        </div>
    );
};

export default Footer;