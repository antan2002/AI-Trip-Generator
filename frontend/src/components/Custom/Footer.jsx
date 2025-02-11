import React from 'react';
import './Footer.css';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        AI Traveler is dedicated to revolutionizing travel experiences with cutting-edge artificial intelligence. Our mission is to provide personalized, high-quality travel solutions to our customers.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: contact@triptrekker.com</p>
                    <p>Phone: +91 23456 67890</p>
                    <p>Address: 123 GooglyPur, AI City, India</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Trip-Trekker. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
