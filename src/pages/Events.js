import React from 'react';
import Slider from 'react-slick';
import './Events.css';
import Event1 from '../assets/Event-1.png';
import Event2 from '../assets/Event-2.png';
import Event3 from '../assets/Event-3.png';
import Event4 from '../assets/Bookhub-31.jpeg'; // Ongoing event image
import Event5 from '../assets/Event5.jpg';
import Workshop101 from '../assets/Workshop-101.png';
import Workshop102 from '../assets/Workshop-102.png';
import Workshop201 from '../assets/Workshop-201.png';
import Workshop202 from '../assets/Workshop-202.png';

const eventsData = [
    {
        title: 'The Publishing Playbook',
        description: 'This webinar is a step-by-step guide to the entire publishing process, perfect for aspiring authors and curious minds alike. Led by an experienced author who has successfully published his own books.',
        images: [Event5, Event5, Event5],
    },
    {
        title: '25 Books in 2025',
        description: '25 authors in 2025 is a year-long programme by BookHub, where we will help 25 young authors make their dream of publishing a Book alive.',
        images: [Event4, Event4, Event4],
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSd1vPe9be_YYepjY-1OXS_Xy7khxvB3VynCT9Dy6iIcpWTn5w/viewform?usp=dialog'
    },
    {
        title: 'Inks and Aspirations',
        description: 'On November 24, 2024 at 6 PM IST, BookHub and YouthSphere collaborated to host Inks and Aspirations, a workshop dedicated to guiding young writers.',
        images: [Event1, Event2, Event3],
        link: 'https://www.linkedin.com/posts/bookhubt_workshop-careers-writers-activity-7266753327521042432-y0HG?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Acing the interviews: #Workshop-2',
        description: 'On October 6,2024, at 8:00 PM IST, we hosted an intern exclusive workshop, dedicated to helping our interns in building interview skills.',
        images: [Workshop201, Workshop202],
        link: 'https://www.linkedin.com/posts/bookhubt_professionaldevelopment-teambookhub-interviewskills-activity-7248740855140773888-Rzud?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Resume building: #Workshop-1',
        description: 'On September 1, 2024, at 8:00 PM IST, we hosted our first ever internship exclusive skill building workshop, dedicated to helping our interns to hold their resumes.',
        images: [Workshop101, Workshop102],
        link: 'https://www.linkedin.com/posts/bookhubt_workshop-community-writing-activity-7236050893056479233-511X?utm_source=share&utm_medium=member_desktop'
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
            <h1 className="main-heading">EVENTS</h1>

            {/* Special Section for Ongoing Event */}
            <div className="special-event">
                <span className="ongoing-tag">Ongoing Event</span>
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
                {eventsData.slice(1).map((event, index) => (
                    <div key={index} className="special-event">
                        <h3 className="event-card-title">{event.title}</h3>
                        <Slider {...settings} className="event-slider">
                            {event.images && event.images.map((image, imgIndex) => (
                                <div key={imgIndex}>
                                    <img src={image} alt={`Workshop ${index + 1} Image ${imgIndex + 1}`} className="slider-image" />
                                </div>
                            ))}
                        </Slider>
                        <p className="event-card-description">{event.description}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer" className="more-info-button">More Info</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
