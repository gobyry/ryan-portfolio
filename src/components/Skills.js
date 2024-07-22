import React from 'react';
import './Skills.css';

const skills = [
    { name: 'JavaScript', rating: 95 },
    { name: 'React.js', rating: 90 },
    // Add more skills as needed
];

const Skills = () => {
    return (
        <section>
            <h1>Skills</h1>
            {skills.map((skill) => (
                <div key={skill.name} className="skill">
                    <h2>{skill.name}</h2>
                    <div className="slider">
                        <div className="fill" style={{ width: `${skill.rating}%` }}></div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
