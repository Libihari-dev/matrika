import { Link } from 'react-router-dom';
import { Heart, Brain, Smile, Users, ArrowRight } from 'lucide-react';
import './ServicePage.css';

export default function Sanctuary() {
    return (
        <div className="page-wrapper">
            <section className="service-hero service-hero-sanctuary">
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content">
                    <span className="section-label" style={{ color: '#C19A4E' }}>LAUNCHING SOON</span>
                    <h1 className="service-hero-title">Sanctuary</h1>
                    <p className="service-hero-desc">
                        A sacred space for inner balance — through yoga, meditation, emotional
                        regulation, and community circles that nurture holistic wellbeing.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container text-center">
                    <span className="section-label">OUR PROGRAMS</span>
                    <h2 className="section-title">Pathways to Inner Balance</h2>
                    <p className="section-subtitle">
                        Our Sanctuary programs are designed to restore harmony between body, mind,
                        and spirit through time-tested practices.
                    </p>
                </div>
                <div className="container">
                    <div className="grid-4 service-cards" style={{ marginTop: '48px' }}>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Heart size={28} /></div>
                            <h3>Yoga & Movement</h3>
                            <p>Traditional yoga practices adapted for all levels, focusing on alignment, breath, and mindful movement.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Brain size={28} /></div>
                            <h3>Meditation & Mindfulness</h3>
                            <p>Guided meditation sessions drawing from diverse traditions to cultivate awareness and inner peace.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Smile size={28} /></div>
                            <h3>Emotional Regulation</h3>
                            <p>Evidence-based techniques for understanding and managing emotional patterns for greater resilience.</p>
                        </div>
                        <div className="card service-card">
                            <div className="service-card-badge">Coming Soon</div>
                            <div className="service-card-icon"><Users size={28} /></div>
                            <h3>Community Circles</h3>
                            <p>Safe, facilitated group spaces for sharing, healing, and growing together in community.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section service-cta-section">
                <div className="container text-center">
                    <h2 className="section-title" style={{ color: 'white' }}>Find Your Inner Sanctuary</h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
                        Join our waitlist to be the first to experience our Sanctuary programs.
                    </p>
                    <Link to="/contact" className="btn btn-white" style={{ marginTop: '24px' }}>
                        Join Waitlist <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
