import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/BOOKHUB-LOGO.png'; // First logo image
import logo2 from '../assets/BOOKHUB-LOGO-2.png'; // Second logo image
import logo3 from '../assets/BOOKHUB-LOGO-3.png'; // Third logo image
import bgImage1 from '../assets/image1.jpg'; // First background image
import bgImage2 from '../assets/image2.jpg'; // Second background image
import bgImage3 from '../assets/image3.jpg'; // Third background image
import './Home.css'; // Ensure you import the CSS file

const logos = [logo1, logo2, logo3]; // Array of logos
const backgrounds = [bgImage1, bgImage2, bgImage3]; // Array of background images

const Home = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

    useEffect(() => {
        const logoInterval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000); // Change logo every 3 seconds

        const bgInterval = setInterval(() => {
            setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 9000); // Change background every 9 seconds

        return () => {
            clearInterval(logoInterval);
            clearInterval(bgInterval);
        }; // Clear intervals on component unmount
    }, []);

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
            {/* Background Overlay */}
            <div className="background-overlay"></div>

            {/* Welcome Section */}
            <h1 className="main-header">WELCOME TO BOOKHUB</h1>
            <p className="sub-header">
                A Non-Profit Organization To Support YOUNG WRITERS.
            </p>

            {/* Buttons Section */}
            <div className="button-container">
                <Link to="/about-us" className="home-button about-us">ABOUT US</Link>
                <Link to="/contact" className="home-button contact-us">CONTACT</Link>
            </div>
        </div>
    );
};

export default Home;