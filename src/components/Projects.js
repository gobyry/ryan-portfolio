import React from 'react';
import './Projects.css'; // Import the stylesheet

// Import images
import birdImage from '../assets/bird.jpeg';
import serverImage from '../assets/server.jpeg';
import pacmanImage from '../assets/pacman.jpeg';
import goldenHoursImage from '../assets/goldenhours.jpeg';
import nlpImage from '../assets/nlp.jpeg';
import budget from '../assets/budget.jpeg';
import chatbot from '../assets/chatbot.jpeg';
import filesorter from '../assets/filesorter.jpeg';

const ProjectCarousel = () => {
    const slides = [
        { title: "AI Pacman", content: "AI-controlled Pacman that never loses.", image: pacmanImage },
        { title: "Golden Hours", content: "Real-time gym availability site for UCSC.", image: goldenHoursImage },
        { title: "NLP Research", content: "Text classifiers and sequence labeling systems.", image: nlpImage },
        { title: "Bird Website", content: "Live sightings data with density heat map and stats site.", image: birdImage },
        { title: "Server Architecture", content: "HTTP servers and I/O systems with server security.", image: serverImage },
        { title: "Auto Budgeter", content: "Dynamic spending and budget suggestions.", image: budget },
        { title: "Chat Bot", content: "Custom personality using OpenAI API.", image: chatbot },
        { title: "File Sorter", content: "Automated file folder sorter program.", image: filesorter }
    ];

    // Duplicate the slides for infinite looping
    const extendedSlides = [
        ...slides,
        ...slides,
        ...slides, // Repeat slides multiple times for smoother infinite scrolling
        ...slides,
        ...slides,
        ...slides,
        ...slides,
    ];

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {extendedSlides.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="carousel-slide-content">
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                            <div className="slide-overlay">
                                <h2 className="slide-title">{slide.title}</h2>
                                <p className="slide-content">{slide.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCarousel;
