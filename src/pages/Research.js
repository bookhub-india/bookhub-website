import React from 'react';
import Slider from 'react-slick';
import './Events.css';
import Event1 from '../assets/Bookhub-11.jpeg';
import Event20 from '../assets/Bookhub-21.jpeg';

const eventsData = [
    {
        title: 'Publication Houses',
        description: 'A curated Google Drive folder featuring a comprehensive list of publication houses to assist writers in finding the right platform for their work.',
        images: [Event1, Event1], // Ensure this image is only included once
        link: 'https://drive.google.com/drive/folders/1v2Jv5elf8Rh_B_qg9xZH1ZGY8m9RJEnP'
    },
    {
        title: 'Websites',
        description: 'Access a valuable Google Drive folder filled with resources designed to enhance writing skills and provide essential content guidance for aspiring writers.',
        images: [Event20, Event20],
        link: 'https://drive.google.com/drive/folders/1vJVC7wyV0_5-tnsG_lKweIRO98ckzow2' // Replace with actual LinkedIn post link
    },
];

const Events = () => {
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
        <div className="events-container">
            <h1 className="main-heading">Resources</h1>
            
            {/* Events Section */}
            <div className="events-section">
                {eventsData.map((event, index) => (
                    <div key={index} className="event-card">
                        <h3 className="event-card-title">{event.title}</h3>
                        {event.images.length > 0 && ( // Check if there are images
                            <Slider {...settings} className="event-slider">
                                {event.images.map((image, imgIndex) => (
                                    <div key={imgIndex}>
                                        <img src={image} alt={`Event ${index + 1} Image ${imgIndex + 1}`} className="slider-image" />
                                    </div>
                                ))}
                            </Slider>
                        )}
                        <p className="event-card-description">{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="more-info-button">Link</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;