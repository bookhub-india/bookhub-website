import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // Change image every 7 seconds

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="slideshow">
            <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
            <div className="controls">
                <div className="arrow left" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>&lt;</div>
                <div className="arrow right" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>&gt;</div>
            </div>
        </div>
    );
};

export default Slideshow;