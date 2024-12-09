import React from 'react';
import Slider from 'react-slick';
import './Events.css'; // Ensure you import your CSS file
import Event1 from '../assets/Event-1.png';
import Event2 from '../assets/Event-2.png';
import Event3 from '../assets/Event-3.png';
// Sample event data
const eventsData = [
    {
        title: 'Inks and Aspirations',
        description: 'Join us for a creative journey where young writers explore their potential through various writing exercises and workshops.',
        images: [Event1, Event2, Event3], // Replace with actual image paths
        link: 'https://www.linkedin.com/posts/bookhubt_workshop-careers-writers-activity-7266753327521042432-y0HG?utm_source=share&utm_medium=member_desktop' // Replace with actual LinkedIn post link
    },
    {
        title: 'Workshop 1',
        description: 'A hands-on workshop focusing on character development and storytelling techniques.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Workshop 2',
        description: 'Learn the art of poetry writing in this interactive session with experienced poets.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Workshop 3',
        description: 'Explore the fundamentals of scriptwriting in this engaging workshop.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Other Event 1',
        description: 'An open mic night for aspiring writers to showcase their work.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Other Event 2',
        description: 'A panel discussion featuring published authors sharing their journeys.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
    },
    {
        title: 'Other Event 3',
        description: 'Networking event for writers to connect and collaborate on projects.',
        link: 'https://www.linkedin.com/in/your-post-link' // Replace with actual LinkedIn post link
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
            <h1 className="main-heading">EVENTS</h1> {/* Main heading for the page */}
            
            {/* Special Section for Inks and Aspirations */}
            <div className="special-event">
                <h2 className="event-title">{eventsData[0].title}</h2>
                <Slider {...settings} className="event-slider">
                    {eventsData[0].images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
                        </div>
                    ))}
                </Slider>
                <p className="event-description">{eventsData[0].description}</p>
                <a href={eventsData[0].link} target="_blank" rel="noopener noreferrer" className="more-info-button">More Info</a>
            </div>

            {/* Workshops Section */}
            <div className="events-section">
                <h2 className="section-title">Workshops</h2>
                {eventsData.slice(1, 4).map((event, index) => (
                    <div key={index} className="event-card">
                        <h3 className="event-card-title">{event.title}</h3>
                        <p className="event-card-description">{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="more-info-button">More Info</a>
                    </div>
                ))}
            </div>

            {/* Other Events Section */}
            <div className="events-section">
                <h2 className="section-title">Other Events</h2>
                {eventsData.slice(4).map((event, index) => (
                    <div key={index} className="event-card">
                        <h3 className="event-card-title">{event.title}</h3>
                        <p className="event-card-description">{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="more-info-button">More Info</a>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Events;