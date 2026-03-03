import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo-row">
                            <img className="footer-logo-img" src="/logo.png" alt="Matrika Soulnest Logo" />
                            <span className="footer-title">Matrika Soulnest</span>
                        </div>
                        <p className="footer-desc">
                            Integrating traditional wisdom with contemporary science for holistic wellbeing.
                        </p>
                    </div>

                    <div className="footer-links-col">
                        <h4>Services</h4>
                        <Link to="/diagnostics">Diagnostics</Link>
                        <Link to="/literacy-hub">Literacy Hub</Link>
                        <Link to="/sanctuary">Sanctuary</Link>
                        <Link to="/green-lab">Green Lab</Link>
                    </div>

                    <div className="footer-links-col">
                        <h4>Company</h4>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Use</Link>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Stay Connected</h4>
                        <p>Join our community for the latest wellbeing insights and updates.</p>
                        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                            <div className="newsletter-input-wrap">
                                <Mail size={18} className="newsletter-icon" />
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-disclaimer">
                    <p>
                        <strong>Medical Disclaimer:</strong> Matrika Soulnest provides wellness education
                        and preventive health assessments. Our services are not a substitute for
                        professional medical advice, diagnosis, or treatment. Always consult with a
                        qualified healthcare provider for medical concerns.
                    </p>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Matrika Soulnest. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
