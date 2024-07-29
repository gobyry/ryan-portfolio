import React, { useEffect } from 'react';
import './Skills.css';

const skills = [
    { name: 'Python', level: 90 },
    { name: 'C/C++', level: 90 },
    { name: 'Ruby', level: 85 },
    { name: 'React.js', level: 85 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Django', level: 80 },
];

const Skills = () => {
    useEffect(() => {
        // Animate the skill bars
        const skillBars = document.querySelectorAll('.skill-bar .inner-bar');
        skillBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.width = `${skills[index].level}%`;
            }, index * 200); // Stagger the animations
        });

        // Animate the overall badge
        const numberText = document.querySelector('.overall-badge .number-text');
        let overallLevel = 0;
        const targetLevel = Math.round(skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length);

        const animateOverallLevel = () => {
            if (overallLevel < targetLevel) {
                overallLevel++;
                numberText.textContent = overallLevel;
                const circumference = 2 * Math.PI * 45; // Radius 45px
                const offset = circumference - (overallLevel / 100 * circumference);
                document.querySelector('.overall-badge .circle').style.strokeDasharray = `${circumference} ${circumference}`;
                document.querySelector('.overall-badge .circle').style.strokeDashoffset = offset;
                requestAnimationFrame(animateOverallLevel);
            }
        };

        requestAnimationFrame(animateOverallLevel);
    }, []);

    return (
        <div className="skills-section">
            <div className="skills-container-wrapper">
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-bar-container">
                            <div className="skill-label">{skill.name}</div>
                            <div className="skill-bar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.level}>
                                <div className="inner-bar" style={{ width: 0 }}></div> {/* Initial width set to 0 for animation */}
                                <div className="percentage">{skill.level}</div> {/* Removed the '%' symbol */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="overall-container">
                    <div className="overall-badge">
                        <svg viewBox="0 0 100 100">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" style={{ stopColor: '#6a11cb', stopOpacity: 1, animation: 'gradientAnimation 6s ease infinite' }} />
                                    <stop offset="100%" style={{ stopColor: '#2575fc', stopOpacity: 1, animation: 'gradientAnimation 6s ease infinite' }} />
                                </linearGradient>
                            </defs>
                            <circle className="circle-bg" cx="50" cy="50" r="45" />
                            <circle className="circle" cx="50" cy="50" r="45" />
                        </svg>
                        <div className="ovr-text">OVR</div>
                        <div className="number-text">0</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
