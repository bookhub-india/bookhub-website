import React, { useEffect, useState } from 'react';
import image1 from '../assets/BOOKHUB-LOGO.png';
import image2 from '../assets/BOOKHUB-LOGO-2.png'; 
import image3 from '../assets/BOOKHUB-LOGO-3.png'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './AboutUs.css'; // Ensure you import the CSS file

const AboutUs = () => {
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
        <div className="about-us-container">
            <div className="text-section">
                <h1 className="main-header">About Us</h1>
                <p className="sub-header">
                    At BookHub, we are passionate about nurturing young writers. Join our supportive community where you can refine your skills, gain valuable feedback, and find your unique voice. Whether it’s through editing tips or workshops with established authors, we provide all the resources you need to thrive. Ready to turn your passion into purpose? Connect with us today!
                </p>
            </div>
            {/* Moved slider section below text section */}
            <div className="slider-section">
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="Home" className="slider-image" />
                    </div>
                    <div>
                        <img src={image2} alt="Slide 2" className="slider-image" />
                    </div>
                    <div>
                        <img src={image3} alt="Slide 3" className="slider-image" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default AboutUs;