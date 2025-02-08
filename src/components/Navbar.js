import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/BOOKHUB-LOGO.png'; // First logo image
import logo2 from '../assets/BOOKHUB-LOGO-2.png'; // Second logo image
import logo3 from '../assets/BOOKHUB-LOGO-3.png'; // Third logo image
import '../index.css';

const logos = [logo1, logo2, logo3];

const Navbar = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000);

        return () => clearInterval(interval); 
    }, []);
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src={logos[currentLogoIndex]} alt="Home" className="logo-image" />
            </Link>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/about-us' className='button about_us' onClick={handleLinkClick}>ABOUT US </Link>
                <Link to='/join-us' className='button join_us' onClick={handleLinkClick}>JOIN US</Link>
                <Link to='/events' className='button events' onClick={handleLinkClick}>EVENTS</Link>
                <Link to='/contact' className='button contact' onClick={handleLinkClick}>CONTACT</Link>
                <Link to='/submission' className='button projects' onClick={handleLinkClick}>SUBMISSION</Link>
                <Link to='/Research' className='button donate' onClick={handleLinkClick}>Research</Link>
            </div>
            <div className='hamburger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {/* Hamburger icon */}
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
                <span className={`bar ${isMenuOpen ? 'toggle' : ''}`}></span>
            </div>
        </div>
    );
};

export default Navbar;