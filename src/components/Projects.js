import React from 'react';
import projects from '../data/projects.json';
import './Projects.css';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            {projects.map((project) => (
                <div key={project.id} className="project">
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;
