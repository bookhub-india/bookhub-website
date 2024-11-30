import React, { useState, useEffect } from 'react';
import Slideshow from './Slideshow';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const eventsData = [
    {
        title: 'Event One',
        images: [image1, image2],
        description: 'Description of Event One.'
    },
    {
        title: 'Event Two',
        images: [image2, image3],
        description: 'Description of Event Two.'
    },
    {
        title: 'Event Three',
        images: [image3],
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
                <p>{eventsData[currentEventIndex].description}</p>
                <div className="controls">
                    <div className="arrow left" onClick={goToPreviousEvent}>&lt;</div>
                    <div className="arrow right" onClick={goToNextEvent}>&gt;</div>
                </div>
            </div>
        </div>
    );
};

export default Events;