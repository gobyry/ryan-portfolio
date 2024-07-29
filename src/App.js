import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contacts from './components/Contacts'; // Import Contacts component
import './App.css'; // Ensure this file contains necessary styles

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="navbar-container">
                    <Navbar />
                </div>
                <div className="main-content">
                    <section id="home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="experience">
                        <Experience />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="contacts"> {/* Add Contacts section */}
                        <Contacts />
                    </section>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
