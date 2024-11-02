import React from 'react';
import logo from '../assets/BOOKHUB-LOGO.png';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg'; 
import image3 from '../assets/image3.jpg'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

    const containerStyle = {
        display: 'flex',
        padding: '40px',
    };

    const textSectionStyle = {
        flex: '0 0 60%',
        paddingRight: '20px',
    };

    const sliderSectionStyle = {
        flex: '0 0 40%',
        position: 'relative', // Allow absolute positioning of the slider
    };

    const mainHeaderStyle = {
        fontSize: '57.22px',
        fontFamily: 'Times New Roman, Times, serif',
        color: '#4A2E18',
        fontWeight: 'bold',
        marginBottom: '15px',
    };

    const subHeaderStyle = {
        fontSize: '26px',
        fontFamily: 'Times New Roman, Times, serif',
        color: '#4A2E18',
        lineHeight: '1.6',
    };

    return (
        <div style={containerStyle}>
            <div style={textSectionStyle}>
                <h1 style={mainHeaderStyle}>Welcome to BookHub</h1>
                <p style={subHeaderStyle}>
                    At BookHub, we are passionate about nurturing young writers. Join our supportive community where you can refine your skills, gain valuable feedback, and find your unique voice. Whether it’s through editing tips or workshops with established authors, we provide all the resources you need to thrive. Ready to turn your passion into purpose? Connect with us today!
                </p>
            </div>
            <div style={sliderSectionStyle}>
                <Slider {...settings} style={{ width: '475px', height: '480.22px', position: 'absolute', left: '0', top: '0' }}>
                    <div>
                        <img src={logo} alt="Home" style={{ width: '475px', height: '480.22px' }} />
                    </div>
                    <div>
                        <img src={image1} alt="Slide 1" style={{ width: '475px', height: '480.22px' }} />
                    </div>
                    <div>
                        <img src={image2} alt="Slide 2" style={{ width: '475px', height: '480.22px' }} />
                    </div>
                    <div>
                        <img src={image3} alt="Slide 3" style={{ width: '475px', height: '480.22px' }} />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default AboutUs;