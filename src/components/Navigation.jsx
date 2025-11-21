import { useState } from 'react';
import './Navigation.css';

function Navigation({ currentPage, setCurrentPage }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setMobileMenuOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav>
            <div className="nav-container glass">
                <div className="logo-container">
                    <img src="/assets/rohit_contructions_logo.png" alt="Rohit Constructions" className="logo-img" />
                    <div className="logo-text">ROHIT CONSTRUCTIONS</div>
                </div>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a className={currentPage === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</a></li>
                    <li><a className={currentPage === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a></li>
                    <li><a className={currentPage === 'clients' ? 'active' : ''} onClick={() => handleNavClick('clients')}>Clients</a></li>
                    <li><a className={currentPage === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>Projects</a></li>
                    <li><a className={currentPage === 'ongoing' ? 'active' : ''} onClick={() => handleNavClick('ongoing')}>Ongoing</a></li>
                    <li><a className={currentPage === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
