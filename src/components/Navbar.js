import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BOOKHUB-LOGO.png';
import '../index.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src={logo} alt="Home" style={{ width: '105px', height: '97.22px', position: 'absolute', left: '3.06px', top: '4.56px' }} />
            </Link>
            <Link to='/about-us' className='button about_us'>ABOUT US</Link>
            <Link to='/join-us' className='button join_us'>JOIN US</Link>
            <Link to='/events' className='button events'>EVENTS</Link>
            <Link to='/contact' className='button contact'>CONTACT</Link>
            <Link to='/Submission' className='button projects'>Submission</Link>
            <Link to='/donate' className='button donate'>DONATE</Link>
        </div>
    );
};

export default Navbar;