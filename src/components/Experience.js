import React from 'react';
import experience from '../data/experience.json';
import './Experience.css';

const Experience = () => {
    return (
        <section>
            <h1>Experience</h1>
            {experience.map((job) => (
                <div key={job.id} className="job">
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Experience;
