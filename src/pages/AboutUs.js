import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/BOOKHUB-LOGO.png';
import image2 from '../assets/BOOKHUB-LOGO-2.png'; 
import image3 from '../assets/BOOKHUB-LOGO-3.png'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './AboutUs.css';

const AboutUs = () => {
    const subHeaders = [
        "At BookHub, we’re passionate about empowering aspiring writers to find their voice, share their stories, and shine in the literary world. Founded as a student-led initiative, we’re here to support new authors with resources, guidance, and a platform to showcase their talent.",
        "From editing assistance and writing reviews to workshops and expert insights, our mission is to create a thriving community for writers. Whether you’re a budding novelist, a poet with a vision, or someone simply seeking to improve your craft, BookHub is your space to learn, grow, and connect with like-minded individuals.",
        "If you'd like to submit your work for editing, head over to the Submission page and share your piece with us. For queries, feedback, or reviews, visit the Contact Us page and let us know how we can help."
    ];

    const [currentSubHeaderIndex, setCurrentSubHeaderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSubHeaderIndex((prevIndex) => (prevIndex + 1) % subHeaders.length);
        }, 9000);

        return () => clearInterval(interval); 
    }, []);

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
                    {subHeaders[currentSubHeaderIndex]}
                </p>
                <div className="button-container">
                    <Link to="/Submission" className="home-button about-us">Submission</Link>
                    <Link to="/contact" className="home-button contact-us">CONTACT</Link>
                </div>
            </div>
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
