// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><Link className="navbar-link" to="/">Home</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/about">Profile</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/experience">Career</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/projects">Achievements</Link></li>
                <li className="navbar-item"><Link className="navbar-link" to="/skills">Skills</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
