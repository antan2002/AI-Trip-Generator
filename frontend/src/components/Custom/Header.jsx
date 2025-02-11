import React, { useState } from 'react';
import './Header.css';
import { MenuItems } from './MenuItem';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

function Header({ isAuthenticated, handleLogout }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navItems'>
            <h1 className='navbar-logo'>Trip-Trekker</h1>
            <div className='menu-icons' onClick={toggleMenu}>
                {isOpen ? <IoMdClose /> : <FaBars />}
            </div>
            <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i>{item.icon}</i>
                            {item.title}
                        </Link>
                    </li>
                ))}
                {isAuthenticated ? (
                    <button className="nav-link" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <>
                        {location.pathname === '/login' && (
                            <Link to="/signup" className="nav-link">
                                <button>Sign Up</button>
                            </Link>
                        )}
                        {location.pathname === '/signup' && (
                            <Link to="/login" className="nav-link">
                                <button>Login</button>
                            </Link>
                        )}
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Header;
