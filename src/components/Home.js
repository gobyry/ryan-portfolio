import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsTyping(true), 500); // Delay typing effect
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="home-container">
            <div className="intro-text">Hello, I'm</div>
            <div className={`typing-text ${isTyping ? 'typing' : ''}`}>Ryan Hui </div>
        </section>
    );
};

export default Home;
