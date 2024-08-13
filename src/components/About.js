import React from 'react';
import './About.css';
import profilePic from '../assets/pfp.JPG'; // Import the profile picture

const About = () => {
    return (
        <section id="about">
            <div className="about-container">
                <div className="image-container">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="info-container">
                    <div className="divider"></div>
                    <div className="stats">
                        <ul>
                            <li style={{ '--order': 1 }}><span className="label">Position:</span> <span className="value">Software Engineer</span></li>
                            <li style={{ '--order': 2 }}><span className="label">School:</span> <span className="value">University of California, Santa Cruz</span></li>
                            <li style={{ '--order': 3 }}><span className="label">Graduation Year:</span> <span className="value">December 2024</span></li>
                            <li style={{ '--order': 4 }}><span className="label">Major:</span> <span className="value">Computer Science (B.S.)</span></li>
                            <li style={{ '--order': 5 }}><span className="label">GPA:</span> <span className="value">3.50</span></li>
                            <li style={{ '--order': 6 }}><span className="label">Location:</span> <span className="value">San Francisco</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
