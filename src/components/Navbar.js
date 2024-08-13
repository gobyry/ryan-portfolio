import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure correct path to the CSS file

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll threshold as needed
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleLinkClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                let offset;
                switch(targetId) {
                    case 'about':
                        offset = 10; // Adjust the offset for About section
                        break;
                    case 'experience':
                        offset = 150; // Adjust the offset for Skills section
                        break;
                    case 'projects':
                        offset = 75; // Adjust the offset for Projects section
                        break;
                    case 'skills':
                        offset = 220; // Adjust the offset for Skills section
                        break;
                    default:
                        offset = 100; // Default offset for other sections
                }

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            }
        };

        const navbarLinks = document.querySelectorAll('.navbar-link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', handleLinkClick);
        });

        return () => {
            navbarLinks.forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        };
    }, []);

    return (
        <div className="navbar-container">
            <nav className={`navbar ${isScrolled ? 'navbar-hidden' : ''}`}>
                <ul className="navbar-menu">
                    <li className="navbar-item"><a className="navbar-link" href="#home">Home</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#about">About</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#experience">Experiences</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#projects">Projects</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#skills">Skills</a></li>
                    <li className="navbar-item"><a className="navbar-link" href="#contacts">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
