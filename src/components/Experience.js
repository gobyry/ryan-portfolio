import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classhookIcon from '../assets/classhook.png'; // ClassHook icon
import skyitIcon from '../assets/skyit.png'; // SkyIT icon

const Experience = () => {
    const [hoveredElement, setHoveredElement] = React.useState(null);

    return (
        <div className="experience-section" style={{ padding: '20px', backgroundColor: '#f5f5f6', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif' }}>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#fff',
                        color: '#000',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        padding: '20px',
                        transform: hoveredElement === 1 ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date=""
                    iconStyle={{
                        background: '#fff',
                        color: '#000',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80px',
                        height: '80px',
                        transform: hoveredElement === 1 ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                        marginTop: '0',
                        position: 'absolute',
                        left: '50%',
                        marginLeft: '-40px', // Adjust to center the icon on the vertical line
                        zIndex: 1 // Ensure icon is above other elements
                    }}
                    icon={<img src={classhookIcon} alt="ClassHook" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />}
                    onMouseEnter={() => setHoveredElement(1)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <h2 className="vertical-timeline-element-title" style={{
                        fontSize: '1.75rem', // Adjust size for h2
                        fontWeight: '200',
                        marginBottom: '0.2rem',
                        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>Software Engineer Intern</h2>
                    <h3 style={{
                        fontSize: '1.25rem', // Adjust size for h3
                        fontWeight: '200',
                        marginBottom: '0.5rem',
                        color: '#000' // Color for the year
                    }}>2023</h3>
                    <h2 style={{ fontWeight: '200', marginBottom: '0' }}>
                        Implemented UI improvements and security enhancements for Classhook that increased user monetization and retention.
                    </h2>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#fff',
                        color: '#000',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        padding: '20px',
                        transform: hoveredElement === 2 ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                    }}
                    contentArrowStyle={{ borderRight: '7px solid #fff' }}
                    date=""
                    iconStyle={{
                        background: '#fff',
                        color: '#000',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '80px',
                        height: '80px',
                        transform: hoveredElement === 2 ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                        marginTop: '0',
                        position: 'absolute',
                        left: '50%',
                        marginLeft: '-40px', // Adjust to center the icon on the vertical line
                        zIndex: 1 // Ensure icon is above other elements
                    }}
                    icon={<img src={skyitIcon} alt="SkyIT" style={{ width: '65%', height: '65%', objectFit: 'contain' }} />}
                    onMouseEnter={() => setHoveredElement(2)}
                    onMouseLeave={() => setHoveredElement(null)}
                >
                    <h2 className="vertical-timeline-element-title" style={{
                        fontSize: '1.75rem', // Adjust size for h2
                        fontWeight: '200',
                        marginBottom: '0.2rem',
                        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent'
                    }}>Back-End Developer</h2>
                    <h3 style={{
                        fontSize: '1.25rem', // Adjust size for h3
                        fontWeight: '200',
                        marginBottom: '0.5rem',
                        color: '#000' // Color for the year
                    }}>2024</h3>
                    <h2 style={{ fontWeight: '200', marginBottom: '0' }}>
                        Developed and optimized backend software for SkyIT’s cloud-based fleet management solution using Django and REST.
                    </h2>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Experience;
