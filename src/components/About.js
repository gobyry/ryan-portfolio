// src/components/About.js
import React from 'react';
import './About.css';
import profilePic from '../assets/no-profile-pic.jpg'; // Import the profile picture

const About = () => {
    return (
        <section className="about">
            <div className="header">
                <h1>2024 Profile</h1>
            </div>
            <div className="content">
                <div className="profile">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                    <div className="name">Ryan Hui</div>
                </div>
                <div className="divider"></div>
                <div className="stats">
                    <ul>
                        <li><span className="label">Position:</span> Software Engineer</li>
                        <li><span className="label">School:</span> University of California, Santa Cruz</li>
                        <li><span className="label">Graduation Year:</span> 2024</li>
                        <li><span className="label">Major:</span> Computer Science (B.S.)</li>
                        <li><span className="label">GPA:</span> 3.50</li>
                        <li><span className="label">Hometown:</span> San Francisco</li>
                    </ul>
                </div>
            </div>
            <div className="analysis">
                <div className="analysis-box">
                    <h2>CS Analysis</h2>
                    <div className="analysis-content">
                        <div className="analysis-item">
                            <h3>Overview</h3>
                            <p>Experienced with a solid foundation in computer science, having worked on diverse projects and demonstrated strong problem-solving skills.</p>
                        </div>
                        <div className="analysis-item">
                            <h3>Analysis</h3>
                            <p>Proficient in various programming languages and technologies, with a keen interest in developing scalable and efficient software solutions.</p>
                        </div>
                        <div className="analysis-item">
                            <h3>Projection</h3>
                            <p>Anticipate growing expertise in emerging technologies and potential for leadership roles in software development and engineering.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
