import React, { useState, useEffect } from 'react';
import Slideshow from './Slideshow';
import image1 from '../assets/Event-1.png';
import image2 from '../assets/Event-2.png';
import image3 from '../assets/Event-3.png';

const eventsData = [
    {
        title: 'Inks & Aspirations',
        images: [image1, image2, image3],
        description: 'A handcrafted workshop by YouthSphere and Bookhub in collaboration. Our valuable guest speaker Kashish Gaur will be sharing their invaluable knowledge and experience with you. If you are someone, who loves writing and wishes to pursue it as a career, but doesnt know the possible options, this workshop is for you! Inks and Aspirations: Careers in Writing, helps you gain knowledge about all the possible careers in the field of writing. No there are many more options than being an author! Date - November 24, 2024 Time - 5:00 PM IST Duration - 90 minutes Venue - Google Meet Its free obviously. '
    },
    {
        title: 'Event Two',
        images: ['image4', 'image5'],
        description: 'Description of Event Two.'
    },
    {
        title: 'Event Three',
        images: ['image6'],
        description: 'Description of Event Three.'
    }
];

const Events = () => {
    const [currentEventIndex, setCurrentEventIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentEventIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
        }, 20000); // Change event every 20 seconds

        return () => clearInterval(intervalId);
    }, [eventsData.length]);

    const goToPreviousEvent = () => {
        setCurrentEventIndex((currentEventIndex - 1 + eventsData.length) % eventsData.length);
    };

    const goToNextEvent = () => {
        setCurrentEventIndex((currentEventIndex + 1) % eventsData.length);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>EVENTS</h1>
            <div className="event-section">
                <h2>{eventsData[currentEventIndex].title}</h2>
                <Slideshow images={eventsData[currentEventIndex].images} />
                <p className="event-description">{eventsData[currentEventIndex].description}</p>
                <div className="controls">
                    <div className="arrow left" onClick={goToPreviousEvent}>&lt;</div>
                    <div className="arrow right" onClick={goToNextEvent}>&gt;</div>
                </div>
            </div>
        </div>
    );
};

export default Events;