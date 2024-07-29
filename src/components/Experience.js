import React, { useEffect, useState } from 'react';
import './Experience.css';
import classhookIcon from '../assets/classhook.png'; // ClassHook icon
import skyitIcon from '../assets/skyit.png'; // SkyIT icon

const Experience = () => {
    const [inView, setInView] = useState({ classhook: false, skyit: false });

    const handleScroll = () => {
        const elements = document.querySelectorAll('.timeline-item');
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const elementBottom = rect.bottom + scrollY;

            if (elementBottom >= scrollY && elementTop <= (scrollY + windowHeight)) {
                const id = element.getAttribute('data-id');
                setInView(prevState => ({ ...prevState, [id]: true }));
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="experience-section">
            <div className="timeline-container">
                <div className="timeline-line"></div>

                <div className={`timeline-item ${inView.classhook ? 'in-view' : ''}`} data-id="classhook">
                    <div className="card-icon-container">
                        <img src={classhookIcon} alt="ClassHook" />
                    </div>
                    <div className="card-content">
                        <div className="content-box">
                            <h2>Software Engineer Intern</h2>
                            <div className="year">2023</div> {/* Separate year element */}
                            <p>Implemented UI improvements and security enhancements for Classhook that increased user monetization and retention.</p>
                        </div>
                    </div>
                </div>

                <div className={`timeline-item ${inView.skyit ? 'in-view' : ''}`} data-id="skyit">
                    <div className="card-icon-container">
                        <img src={skyitIcon} alt="SkyIT" />
                    </div>
                    <div className="card-content">
                        <div className="content-box">
                            <h2>Back-End Developer</h2>
                            <div className="year">2024</div> {/* Separate year element */}
                            <p>Developed and optimizized backend software for SkyIt’s cloud-based fleet management solution using Django and REST.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
