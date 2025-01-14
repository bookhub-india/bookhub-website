import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import eventImage from '../assets/Bookhub-31.jpeg'; // Your event image
import logo1 from '../assets/image1.jpg'; // First background image
import logo2 from '../assets/image2.jpg'; // Second background image
import logo3 from '../assets/image3.jpg'; // Third background image
import './Home.css'; // Ensure you import the CSS file
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const backgrounds = [logo1, logo2, logo3]; // Array of background images

const Home = () => {
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(true); // State to manage modal visibility

    useEffect(() => {
        const bgInterval = setInterval(() => {
            setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 9000); // Change background every 9 seconds

        return () => {
            clearInterval(bgInterval);
        }; // Clear intervals on component unmount
    }, []);

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="home-container" style={{ backgroundImage: `url(${backgrounds[currentBackgroundIndex]})` }}>
            {/* Welcome Section */}
            <h1 className="main-header">WELCOME TO BOOKHUB</h1>
            <p className="sub-header">A Non-Profit by authors for the authors.</p>

            {/* Buttons Section */}
            <div className="button-container">
                <Link to="/about-us" className="home-button about-us">ABOUT US</Link>
                <Link to="/contact" className="home-button contact-us">CONTACT</Link>
            </div>

            <div className="social-icons">
                <a href="mailto:bookhubtindia@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/bookkhub" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/bookhubt/mycompany/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>

            {/* Modal for Ongoing Event */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={handleCloseModal}>✖</button>
                        <h2>Ongoing Event</h2>
                        <img src={eventImage} alt="Ongoing Event" className="event-image" />
                        <Link to="/events" className="view-more-button">View More</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
