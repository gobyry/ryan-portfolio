import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contacts.css'; // Ensure correct path to the CSS file

const Contacts = () => {
    const handleResumeClick = () => {
        window.open('https://flowcv.com/resume/aqs0s1aojc', '_blank');
    };

    return (
        <section id="contacts" className="contacts-section">
            <div className="contacts-container">
                <a href="mailto:ryanhui30@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
                <a href="https://linkedin.com/in/ryanhui08" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/gobyry" target="_blank" rel="noopener noreferrer" className="contact-icon">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            <button className="resume-button" onClick={handleResumeClick}>
                View Resume
            </button>
        </section>
    );
};

export default Contacts;
