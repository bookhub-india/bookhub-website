import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/BOOKHUB-LOGO.png';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import Slider from "react-slick";
import './Home.css'; // Ensure you import the CSS file

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="home-container">
            {/* Welcome Section */}
            <h1 className="main-header">WELCOME TO BOOKHUB</h1>
            <p className="sub-header">
                A Non-Profit Organization To Support YOUNG WRITERS. At BookHub, we are passionate about nurturing young writers. Join our supportive community where you can refine your skills, gain valuable feedback, and find your unique voice. Whether it’s through editing tips or workshops with established authors, we provide all the resources you need to thrive. Ready to turn your passion into purpose? Connect with us today!
            </p>

            {/* About Us Section (Merged Content) */}
            <div className="about-us-container">
                <div className="slider-section">
                    <Slider {...settings} style={{ width: '100%', height: 'auto' }}>
                        <div>
                            <img src={logo} alt="Home" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={image1} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={image2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
                        </div>
                        <div>
                            <img src={image3} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* Buttons Section */}
            <div className="button-container">
                <Link to="/about-us" className="button about-us">ABOUT US</Link>
                <Link to="/contact" className="button contact-us">CONTACT</Link>
            </div>
        </div>
    );
};

export default Home;