import React from 'react';
import './Research.css'; // Import the CSS file for styling
import image1 from '../assets/BOOKHUB-LOGO.png';
import image2 from '../assets/BOOKHUB-LOGO-2.png';
import image3 from '../assets/BOOKHUB-LOGO-3.png';

const teamMembers = [
    {
        name: 'Author 1',
        role: 'Project 1',
        description: 'Sample Description',
        image: image1, // Replace with actual image path
    },
    {
        name: 'Author 2',
        role: 'Project 2',
        description: 'Sample Description',
        image: image1, // Replace with actual image path
    },
    {
        name: 'Author 3',
        role: 'Project 3',
        description: 'Sample Description',
        image: image1, 
    },
    {
        name: 'Article 1',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Article 2',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Article 3',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Article 4',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Article 5',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    {
        name: 'Article 6',
        role: 'Publication Date',
        description: 'Sample Description',
        image: image2, // Replace with actual image path
    },
    // Extras Team Members
    {
        name: 'Extras 1',
        role: 'NA',
        description: 'Sample Description',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Extras 2',
        role: 'NA',
        description: 'Sample Description',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Extras 3',
        role: 'NA',
        description: 'Sample Description',
        image: image3, // Replace with actual image path
    },
    {
        name: 'Extras 4',
        role: 'NA',
        description: 'Sample Description',
        image: image3, // Replace with actual image path
    }
];

const Research = () => {
    return (
        <div className="team-container">
            <h1 className="team-header">Resources</h1>
            
            <section className="founders-section">
                <h2 className="section-title">Authors</h2>
                <div className="team-members">
                    {teamMembers.slice(0, 3).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="media-team-section">
                <h2 className="section-title">Articles</h2>
                <div className="team-members">
                    {teamMembers.slice(3, 9).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="events-team-section">
                <h2 className="section-title">Extras</h2>
                <div className="team-members">
                    {teamMembers.slice(9).map(member => (
                        <div className="team-member" key={member.name}>
                            <img src={member.image} alt={member.name} className="member-image" />
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Add more sections as needed */}
            
        </div>
    );
};

export default Research;