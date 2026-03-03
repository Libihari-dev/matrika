import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/diagnostics', label: 'Diagnostics', badge: 'NOW' },
        { path: '/literacy-hub', label: 'Literacy Hub' },
        { path: '/sanctuary', label: 'Sanctuary' },
        { path: '/green-lab', label: 'Green Lab' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-inner container">
                <Link to="/" className="navbar-brand">
                    <img className="navbar-logo" src="/logo.png" alt="Matrika Soulnest Logo" />
                    <span className="navbar-title">Matrika Soulnest</span>
                </Link>

                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                            {link.badge && <span className="nav-badge">{link.badge}</span>}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary navbar-cta-mobile" onClick={() => setIsOpen(false)}>
                        Book Session
                    </Link>
                </div>

                <Link to="/contact" className="btn btn-primary navbar-cta">
                    Book Session
                </Link>

                <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
