import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BOOKHUB-LOGO.png';
import '../index.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src={logo} alt="Home" className="logo-image" />
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/about-us' className='button about_us'>ABOUT US</Link>
                <Link to='/join-us' className='button join_us'>JOIN US</Link>
                <Link to='/events' className='button events'>EVENTS</Link>
                <Link to='/contact' className='button contact'>CONTACT</Link>
                <Link to='/submission' className='button projects'>SUBMISSION</Link>
                <Link to='/donate' className='button donate'>DONATE</Link>
            </div>
            <div className='hamburger' onClick={toggleMenu}>
                {/* Hamburger icon */}
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
            </div>
        </div>
    );
};

export default Navbar;